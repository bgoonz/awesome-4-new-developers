const Person = function (firstAndLast) {
  let firstName = [...firstAndLast.split(" ")][0];
  let lastName = [...firstAndLast.split(" ")][1];
  this.setFirstName = (first) => (firstName = first);
  this.setLastName = (last) => (lastName = last);
  this.setFullName = (full) => {
    const fullName = [...full.split(" ")];
    firstName = fullName[0];
    lastName = fullName[1];
  };
  this.getFullName = () => firstName + " " + lastName;
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
};

const bob = new Person("Bob Ross");
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
