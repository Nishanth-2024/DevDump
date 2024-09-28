'use strict';

///////////////////////////////////////
// Objects

console.group("Objects")
{
  // Initialization: Define the person object with initial properties and methods
  const person = {
    name: 'FirstName LastName',
    birthyear: 2004,
    age: function () {
      return (new Date()).getFullYear() - this.birthyear;
    },
    friends: ['Friend1', 'Friend 2', 'Friend.3'],
    hasDriversLicense: true,
    performFn: function(...args) {
      console.log(`this inside performFn`, this);
      console.log(`performing function *performFn* on person of age ${this.age()} with arguments: ${args}`);
    }
  };
  console.log(`Person before any modifications: `, person);

  // Access: Access and log various properties and methods of the person object
  console.log(`person.name: ${person.name}`);
  console.log(`person.birthyear: ${person.birthyear}`);
  console.log(`person.title: ${person.title}`);
  console.log(`person["title"]: ${person["title"]}`);
  console.log(`person.age(): ${person.age()}`);
  console.log(`person[prompt(". . . .")]: ${person[prompt('property to be accessed in person')]}`);

  // Modification: Add new properties and methods to the person object
  console.log(`
    Adding birth place, work location and a performFn2:
    person.birthPlace = "Portugal"
    person["work location"] = "Warsaw"
  `);
  person.birthPlace = "Portugal";
  person["work location"] = "Warsaw";
  person["performFn2"] = function(...args) {
    console.log(`this inside performFn2`, this);
    console.log(`performing function *performFn2* on person of age ${this.age()} with arguments: ${args}`);
  };
  console.log(`Person: ${person}`);
  console.log(`Person: `, person);

  // Execution: Call the performFn and performFn2 methods with arguments
  console.log(`performFn`); person.performFn(90, 78);
  console.log(`performFn2`); person.performFn2(90, 78);
}
console.groupEnd();
