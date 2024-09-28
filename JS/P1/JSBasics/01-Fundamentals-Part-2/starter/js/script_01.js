///////////////////////////////////////
// Activating Strict Mode
'use strict';

///////////////////////////////////////
// Function
// - Declaration/Expression and call/invoke/run

console.group("Function Declaration & Invocation")
{
  // Function Declaration
  function logger() {
    console.log('My name is logger');
  }

  // calling / running / invoking function
  logger();
  logger();
  logger();
}
console.groupEnd()

console.group("Function Expression & Invocation - 1")
{
  // Function Expression
  function calcAge(birthYear) {
    return 2056 /* Current year*/ - birthYear
  }

  console.log(calcAge(2034)) // 22
  console.log(calcAge(2055)) // 1
}
console.groupEnd()

console.group("Function Expression & Invocation - 2")
{
  // Function Expression
  const calcAge = function(birthYear) {
    return 2056 /* Current year*/ - birthYear
  }

  console.log(calcAge(2034)) // 22
  console.log(calcAge(2055)) // 1
}
console.groupEnd()

console.group("Arrow Function (Function Expression) & Invocation - 2")
{
  // Function Expression
  const calcAge = birthYear => 2056 /* Current year*/ - birthYear

  console.log(calcAge(2034)) // 22
  console.log(calcAge(2055)) // 1
}
console.groupEnd()

