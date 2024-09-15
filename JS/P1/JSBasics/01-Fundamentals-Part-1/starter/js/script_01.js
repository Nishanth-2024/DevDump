////////////////////////////////////////////////////////////
// Values and Variables
//  - Data types
//  - Declaration
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Data Types
{
  let javascriptIsFun = true;
  console.group(`let javascriptIsFun = true;`);
  console.log(`javascriptIsFun: ${javascriptIsFun}`);
  console.log(`type of javascriptIsFun: ${typeof javascriptIsFun}`);
  console.groupEnd();

  javascriptIsFun = "YES!";
  console.group(`javascriptIsFun = 'YES!';`);
  console.log(`javascriptIsFun: ${javascriptIsFun}`);
  console.log(`type of javascriptIsFun: ${typeof javascriptIsFun}`);
  console.groupEnd();

  let year;
  console.group(`let year;`);
  console.log(`year: ${year}`);
  console.log(`type of year: ${typeof year}`);
  console.groupEnd();

  year = 1793;
  console.group(`year = 1793;`);
  console.log(typeof year);
  console.groupEnd();

  console.group("");
  console.log(`typeof true ::::: >>>> ${typeof true}`);
  console.log(`typeof 1 ::::: >>>> ${typeof 1}`);
  console.log(`typeof "1" ::::: >>>> ${typeof "1"}`);
  console.log(`typeof undefined ::::: >>>> ${typeof undefined}`);
  console.log(`typeof null ::::: >>>> ${typeof null}`);
  console.log(
    `typeof ({ name: 'Nishanth' }) ::::: >>>> ${typeof { name: "Nishanth" }}`,
  );
  console.groupEnd();
}

////////////////////////////////////////////////////////////
// Declaration
//  - let, const (ES6) (BLOCK SCOPED)
//  - and var (FUNCTION SCOPED)
{
  console.group("");
  // let - variable with block scope (allows mutation)
  let variable1 = 30;
  console.log(`variable1 :::: >>>> ${variable1}`);
  variable1 = 32;
  console.log(`variable1 :::: >>>> ${variable1}`);
  variable1 = false;
  console.log(`variable1 :::: >>>> ${variable1}`);
  variable1 = { name: "Nishanth" };
  console.log(`variable1 :::: >>>> ${variable1}`);
  variable1 = null;

  // const - constant - (desnot allow mutation)
  const PI = 3.14159;
  // PI = true // this is not allowed

  const birthYear = 1793; // constant
  let age = 30; // changes with current date

  // var - old way to declare variable (never use var)
  var job = "native iOS dev";
  job = "react-native dev";
  console.groupEnd("");
}
