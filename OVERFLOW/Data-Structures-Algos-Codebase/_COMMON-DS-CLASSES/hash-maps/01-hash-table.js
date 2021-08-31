/**
 *
 * Bryan Guner
 * e: bryan.guner@gmail.com
 * w:
 *
 */

class HashMap {
  constructor() {
    this.buckets = new Array(7);
  }

  hash(str) {
    str = str.toLowerCase();
    const ALPHABET = "qwertyuiopasdfghjklzxcvbnm";
    let sum = 0;
    for (let index = 0; index < str.length; index++) {
      sum += ALPHABET.indexOf(str.charAt(index));
    }
    console.log("hash:", str, sum);
    return sum;
  }

  hashcode(key) {
    let index = this.hash(key) % this.buckets.length;
    console.log("key: ", key, " index: ", index);
    return index;
  }

  put(key, value) {
    let index = this.hashcode(key);
    this.buckets[index] = value;
  }

  get(key) {
    let index = this.hashcode(key);
    return this.buckets[index];
  }

  remove(key) {
    let index = this.hashcode(key);
    this.buckets[index] = null;
  }
}

let map = new HashMap();
map.put("Pune", 7.4);
map.put("Nagpur", 3.2);
map.put("Mumbai", 3.2);
map.put("Raipur", 6);
console.table(map.buckets);

console.log(map.get("Washington"));
console.log(map.get("Oregon"));
