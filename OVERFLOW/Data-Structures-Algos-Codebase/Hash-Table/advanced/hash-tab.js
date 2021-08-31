// helper functions are static methods on the class

"use strict";
{
  const MAX_PROBES = 256; // if chains or open addressing rehashes are longer than this, something is wrong

  class HashTable {
    constructor({
      hashFunction: hashFunction = HashTable.basicHash,
      pairsList: pairsList = null,
      numSlots: numSlots = 256,
      maxRatio: maxRatio = 0.75, // load factor ( keys/slots ) at which to grow and rehash
      desiredCollisionProbability: desiredCollisionProbability = NaN,
      ensurePowerOfTwo: ensurePowerOfTwo = false,
      growthRate: growthRate = 2.0, // how much to multiple the number of slots by at rehashing
      probeStrategy: probeStrategy = "OPEN_ADDRESSING", // or 'CHAINING'
    } = {}) {
      let numKeys = 0;
      const spec = {
        numKeys,
        numSlots,
        maxRatio,
        desiredCollisionProbability,
        ensurePowerOfTwo,
        probeStrategy,
        growthRate,
        hashFunction,
      };
      Object.assign(this, spec);
      this.growAndRehashAllEntries({ pairsList, growthRate: 1.0 });
      console.log("Created HashTable to spec", spec);
    }

    // rehash and grow

    growAndRehashAllEntries({
      pairsList: pairsList = this.allPairs(),
      growthRate: growthRate = this.growthRate,
    } = {}) {
      this.numSlots = this.calculateNumSlots({ pairsList, growthRate });
      this.slots = new Array(this.numSlots);
      this.numKeys = 0;
      if (Array.isArray(pairsList)) {
        pairsList.forEach(([key, value]) => this.insert(key, value));
      }
    }

    // Key Equality
    static orderedStringify(obj) {
      const allKeys = [];
      JSON.stringify(obj, (k, v) => (allKeys.push(k), v));
      return JSON.stringify(obj, allKeys.sort());
    }

    static keysEqual(k1, k2) {
      const sk1 = HashTable.anythingToString(k1);
      const sk2 = HashTable.anythingToString(k2);
      return sk1 == sk2;
    }

    // insert
    set(key, value) {
      return this.insert(key, value);
    }
    insert(key, value) {
      let hash = this.hashValueToTableSize(this.hashFunction(key));
      if (this.probeStrategy == "CHAINING") {
        let probe = 0;
        let link = this.slots[hash];
        while (
          !!link &&
          link.occupied &&
          !HashTable.keysEqual(link.key, key) &&
          !!link.next
        ) {
          link = link.next;
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
        }
        if (!link) {
          this.slots[hash] = { occupied: true, key, value, next: undefined };
          this.numKeys += 1;
        } else if (!link.occupied) {
          link.key = key;
          link.value = value;
          link.occupied = true;
          this.numKeys += 1;
        } else if (HashTable.keysEqual(link.key, key)) {
          link.value = value;
        } else if (!link.next) {
          link.next = { occupied: true, key, value, next: undefined };
          this.numKeys += 1;
        }
      } else {
        let probe = 0;
        while (
          !!this.slots[hash] &&
          !HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
          hash = this.hashValueToTableSize(this.hashFunction(key, probe));
        }
        if (
          !!this.slots[hash] &&
          HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          this.slots[hash].value = value;
        } else {
          this.slots[hash] = { key, value };
          this.numKeys += 1;
        }
      }
      if (this.numKeys / this.numSlots > this.maxRatio) {
        this.growAndRehashAllEntries();
      }
    }

    // get
    get(key) {
      return this.retrieve(key);
    }
    retrieve(key) {
      let hash = this.hashValueToTableSize(this.hashFunction(key));
      if (this.probeStrategy == "CHAINING") {
        let probe = 0;
        let link = this.slots[hash];
        while (
          !(link.occupied || HashTable.keysEqual(link.key, key)) &&
          !!link.next
        ) {
          link = link.next;
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
        }
        if (HashTable.keysEqual(link.key, key)) {
          return link.value;
        } else {
          throw new TypeError(`Key not found ${key}`);
        }
      } else {
        let probe = 0;
        while (
          !!this.slots[hash] &&
          !HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
          hash = this.hashValueToTableSize(this.hashFunction(key, probe));
        }
        if (
          !!this.slots[hash] &&
          HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          return this.slots[hash].value;
        } else {
          throw new TypeError(`Key not found ${key}`);
        }
      }
    }

    // has
    has(key) {
      return this.contains(key);
    }
    contains(key) {
      let hash = this.hashValueToTableSize(this.hashFunction(key));
      if (this.probeStrategy == "CHAINING") {
        let probe = 0;
        let link = this.slots[hash];
        if (!!link) {
          while (
            !(link.occupied || HashTable.keysEqual(link.key, key)) &&
            !!link.next
          ) {
            link = link.next;
            probe += 1;
            if (probe > MAX_PROBES) {
              throw new TypeError(
                `${this.probeStrategy} Max Probes Exceeded At ${probe}`
              );
            }
          }
          if (HashTable.keysEqual(link.key, key) && link.occupied) {
            return true;
          }
        }
        return false;
      } else {
        let probe = 0;
        while (
          !!this.slots[hash] &&
          !HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
          hash = this.hashValueToTableSize(this.hashFunction(key, probe));
        }
        if (
          !!this.slots[hash] &&
          HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          return true;
        }
        return false;
      }
    }

    // delete
    delete(key) {
      return this.remove(key);
    }
    remove(key) {
      let hash = this.hashValueToTableSize(this.hashFunction(key));
      if (this.probeStrategy == "CHAINING") {
        let probe = 0;
        let link = this.slots[hash];
        if (!!link) {
          while (
            !(link.occupied || HashTable.keysEqual(link.key, key)) &&
            !!link.next
          ) {
            link = link.next;
            probe += 1;
            if (probe > MAX_PROBES) {
              throw new TypeError(
                `${this.probeStrategy} Max Probes Exceeded At ${probe}`
              );
            }
          }
          if (HashTable.keysEqual(link.key, key) && link.occupied) {
            link.occupied = false;
            this.numKeys -= 1;
            return true;
          }
        }
        return false;
      } else {
        let probe = 0;
        while (
          !!this.slots[hash] &&
          !HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          probe += 1;
          if (probe > MAX_PROBES) {
            throw new TypeError(
              `${this.probeStrategy} Max Probes Exceeded At ${probe}`
            );
          }
          hash = this.hashValueToTableSize(this.hashFunction(key, probe));
        }
        if (
          !!this.slots[hash] &&
          HashTable.keysEqual(key, this.slots[hash].key)
        ) {
          delete this.slots[hash];
          this.numKeys -= 1;
          return true;
        }
        return false;
      }
    }

    // iterate table to get all pairs
    allPairs() {
      const pairs = [];
      if (this.probeStrategy == "CHAINING") {
        for (let hash = 0; hash < this.slots.length; hash++) {
          let probe = 0;
          let link = this.slots[hash];
          if (!!link) {
            if (link.occupied) {
              pairs.push([link.key, link.value]);
            }
            while (!!link.next) {
              link = link.next;
              if (link.occupied) {
                pairs.push([link.key, link.value]);
              }
              probe += 1;
              if (probe > MAX_PROBES) {
                throw new TypeError(
                  `${this.probeStrategy} Max Probes Exceeded At ${probe}`
                );
              }
            }
          }
        }
      } else {
        for (let hash = 0; hash < this.slots.length; hash++) {
          if (!!this.slots[hash]) {
            const item = this.slots[hash];
            pairs.push([item.key, item.value]);
          }
        }
      }
      return pairs;
    }

    // Sizing calculations

    // The following methods are used to calculate
    // correspondence between slots and keys counts
    // given their ratio or a desired collision probability

    static numSlotsForRatio(r, numKeys) {
      return numKeys / r;
    }
    static numKeysForRatio(r, numSlots) {
      return numSlots * r;
    }

    // the following two formulas are from the
    // birthday cooincidence probability problem
    // generalized to collissions
    // from https://en.wikipedia.org/wiki/Birthday_problem#Cast_as_a_collision_problem

    static numSlotsForCollisionProbability(p, numKeys) {
      return numKeys ** 2 / (2 * Math.log(1 / 1 - p));
    }
    static numKeysForCollisionProbability(p, numSlots) {
      return Math.ceil(Math.sqrt(Math.log(1 / (1 - p)) * 2 * numSlots));
    }

    // This is interesting
    // If we set desired collision probability
    // Then the maxRatio permitted changes with the number of keys
    // So we need to check
    // On every insert
    // The new max ratio
    // And see if the actual table ratio exceeds it.
    // And if it does, we need to grow the table.
    static maxRatioForCollisionProbability(p, numKeys) {
      return (2 * Math.log(1 / (1 - p))) / numKeys;
    }

    static toThisOrNextPowerOfTwo(num) {
      return 2 ** Math.ceil(Math.log2(num));
    }

    calculateNumSlots({
      pairsList: pairsList = null,
      growthRate: growthRate = this.growthRate,
    } = {}) {
      let minSlots;
      if (Array.isArray(pairsList)) {
        const approxNumKeys = pairsList.length;
        minSlots = HashTable.numSlotsForRatio(this.maxRatio, approxNumKeys);
      }
      minSlots = this.numSlots * growthRate;
      if (
        !Number.isNaN(this.desiredCollisionProbability) &&
        !Number.isNaN(this.numKeys)
      ) {
        minSlots = Math.max(
          minSlots,
          HashTable.numSlotsForCollisionProbability(
            this.desiredCollisionProbability,
            this.numKeys
          )
        );
      }
      if (this.ensurePowerOfTwo) {
        minSlots = HashTable.toThisOrNextPowerOfTwo(minSlots);
      }
      return minSlots;
    }

    // hash function

    static basicHash(key, seed = 11.37 /* why not? :) */) {
      // This code is take from my tifuhash https://github.com/dosyago-coder-0/tifuhash
      const keyString = HashTable.anythingToString(key);
      let n = Array.from(keyString);
      let m = seed + "";
      if (n.length == 0) {
        // seed only
        n = [m];
      }
      const s = parseFloat(n.length ? n.pop() : 0);
      m = Array.from(m).concat(n);
      const isFloat = m.every((x) => !isNaN(parseFloat(x)));
      if (isFloat) {
        m = m.map((x) => parseFloat(x));
      } else {
        m = HashTable.stringToUTF8Bytes(m.join(""));
      }
      let a = new Float64Array(4);
      a[0] = 1;
      a[2] = s ? Math.pow(s + 1 / s, 1 / 2) : 3;
      a[3] = s ? Math.pow(s + 1 / s, 1 / 5) : 7;
      m.forEach((x, i) => {
        a[1] = (x + i + 1) / a[3];
        a[2] += a[0] / a[1];
        a[2] = 1 / a[2];
        a[3] += x;
        a[3] = a[0] / a[3];
        a[0] = a[1] + 1;
      });
      a[2] *= Math.PI + a[3];
      a[3] *= Math.E + a[2];
      const h = new Uint32Array(a.buffer);
      return (h[4] ^ h[5] ^ h[6] ^ h[7]) >>> 0;
    }

    // static helpers

    static stringToUTF8Bytes(s) {
      const utf8Str = unescape(encodeURIComponent(s));
      return Array.from(utf8Str).map((c) => c.charCodeAt(0));
    }

    static anythingToString(a) {
      const type = Object.prototype.toString.call(a);
      let json = "[json:circular]";
      try {
        json = HashTable.orderedStringify(a);
      } catch (e) {
        console.warn(e);
      }
      const str = a + "";
      const numStr = a + 0 + "";
      const numStrStrict = a * 1 + "";
      const rep = `${type}:${json}:${str}:${numStr}:${numStrStrict}`;
      return rep;
    }

    hashValueToTableSize(hval) {
      // could also add
      // ( as in Java implementaion to ensure high bits have effect ):
      // hval = hval ^ (hval >> 16);
      return hval % this.numSlots;
    }
  }

  Object.assign(self, { HashTable });

  test();

  function test() {
    const x = new HashTable();
    x.insert("a", 1);
    x.insert("b", 2);
    x.insert({ c: 3 }, 3);
    Object.assign(self, { x });
    const y = new HashTable({ probeStrategy: "CHAINING" });
    y.insert("a", 1);
    y.insert("b", 2);
    y.insert({ c: 3 }, 3);
    Object.assign(self, { y });
  }
}
