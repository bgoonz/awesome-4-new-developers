class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello, ${this.name}.`;
  }
  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }
  update(obj) {
    if (typeof obj !== "object") {
      throw new TypeError(`${typeof obj} must be an object.`);
    }
    if (!obj.name || !obj.age) {
      throw new TypeError(`Object must have both a name and an age property.`);
    }
    this.name = obj.name;
    this.age = obj.age;
  }
  tryUpdate(obj) {
    try {
      this.update(obj);
    } catch (err) {
      return false;
    }
    return true;
  }
  static greetAll(people) {
    return people.map((person) => person.sayHello());
  }
}

module.exports = Person;
