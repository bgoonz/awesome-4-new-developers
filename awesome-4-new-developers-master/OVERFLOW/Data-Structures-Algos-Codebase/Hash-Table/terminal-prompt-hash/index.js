const prompts = require("prompts");

class HashTable {
  constructor(initSize = 5, loadFactor = 0.75) {
    this.items = new Array(initSize);
    this.loadFactor = loadFactor;
    this.itemNumber = 0;
    this.collisions = 0;
  }

  get(key) {
    const hashedKey = this.hashKey(key, this.items.length);

    let item = this.items[hashedKey];

    item = item.find((x) => key === x[0]);

    return item ? item[1] : undefined;
  }

  delete(key) {
    const hashedKey = this.hashKey(key, this.items.length);
    const item = this.items[hashedKey];

    if (item.length === 1) {
      this.items[hashedKey] = [];
    } else {
      this.item[hashedKey] = this.item[hashedKey].filter((currentItem) => {
        return key !== currentItem[0];
      });
    }
  }

  getLoadFactor() {
    return this.itemNumber / this.items.length;
  }

  set(key, value) {
    const hashedKey = this.hashKey(key, this.items.length);
    this.itemNumber++;

    if (this.items[hashedKey]) {
      this.collisions++;
      console.log("Collilsion", hashedKey, this.collisions);
      this.items[hashedKey].push([key, value]);
    } else {
      this.items[hashedKey] = [[key, value]];
    }

    if (this.getLoadFactor() > this.loadFactor) {
      this.rehash(this.items.length * 2);
    }
  }

  rehash(size) {
    console.log("rehashing");

    const newList = new Array(size);

    this.items.forEach((item) => {
      item.forEach(([key, value]) => {
        const hashedKey = this.hashKey(key, newList.length);

        if (!newList[hashedKey]) {
          newList[hashedKey] = [[key, value]];
        } else {
          newList[hashedKey].push([key, value]);
        }
      });
    });

    this.items = newList;
  }

  hashKey(key, length) {
    let sumCode = 0;

    for (let i = 0; i < key.length; i++) {
      sumCode += key.charCodeAt(i) * 17 * 13;
    }

    sumCode = sumCode % length;

    return sumCode;
  }
}

const main = async () => {
  const hashTable = new HashTable();

  while (true) {
    const userPrompt = await prompts({
      type: "text",
      name: "value",
      message: "Would you like to add, delete, or search for a hashed value?",
    });

    if (!userPrompt || !userPrompt.value) {
      console.log("No value, exiting...");
      process.exit();
    }

    switch (userPrompt.value.toLowerCase()) {
      case "add": {
        const keyPrompt = await prompts({
          type: "text",
          name: "value",
          message: "Enter a key",
        });

        const valuePrompt = await prompts({
          type: "text",
          name: "value",
          message: "Enter a value",
        });

        hashTable.set(keyPrompt.value, valuePrompt.value);
        continue;
      }

      case "search": {
        const keyPrompt = await prompts({
          type: "text",
          name: "value",
          message: "Enter a key",
        });

        const result = hashTable.get(keyPrompt.value);

        if (result) {
          console.log(`Found value ${result}`);
        } else {
          console.log(`Value not found ${keyPrompt.value}`);
        }
      }
    }
  }
};

main();
