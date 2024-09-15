////////////////////////////////////////////////////////////
// Type Conversion and Coersion
// Truthy and Falsy
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Type Conversion and Coersion
console.group("Type Conversion and Coersion");
{
  console.group("String to Number");
  const inputYear = "1567"
  console.log(`inputYear is ${inputYear} and it's type is ${typeof inputYear}`);
  const inputYearNumber = Number(inputYear)
  console.log(`inputYearNumber is ${inputYearNumber} and it's type is ${typeof inputYearNumber}`);
  const inputYearNumber2 = +inputYear
  console.log(`inputYearNumber2 is ${inputYearNumber2} and it's type is ${typeof inputYearNumber2}`)

  const inputName = "FirstName"
  console.log(`inputName is ${inputName} and it's type is ${typeof inputName}`)
  const inputNameNumber = Number(inputName)
  console.log(`inputNameNumber is ${inputNameNumber} and it's type is ${typeof inputNameNumber}`)
  console.groupEnd();

  console.group("Number to String");
  const inputNumber = 23
  console.log(`inputNumber is ${inputNumber} and it's type is ${typeof inputNumber}`)
  const inputNumberAsString = String(inputNumber)
  console.log(`inputNumberAsString is ${inputNumberAsString} and it's type is ${typeof inputNumberAsString}`)

  console.group("Type Coersion");

  console.log(`1 + "1" ::::: >>>> ${1 + "1"}`); // "11"
  console.log(`"1" + 1 ::::: >>>> ${"1" + 1}`); // "11"
  console.log(`NaN + 1 ::::: >>>> ${NaN + 1}`); // NaN
  console.log(`1 + NaN ::::: >>>> ${NaN + 1}`); // NaN

  console.groupEnd();

  console.group("Type Coersion 2");

  console.log(`"23" - "20" + 5 ::::: >>>> ${"23" - "20" + 5}`); // 8
  console.log(`"1" + 1 - 1 ::::: >>>> ${"1" + 1 - 1}`); // 10
  console.log(`"1" + (1 - 1) ::::: >>>> ${"1" + (1 - 1)}`); // 10
  console.log(`("1" + 1) - 1 ::::: >>>> ${("1" + 1) - 1}`); // 1

  console.groupEnd();
}
console.groupEnd();

////////////////////////////////////////////////////////////
// Truthy and Falsy
console.group("Truthy and Falsy");
{
  console.log(`NaN, 0, '', null, undefined are falsy`);
  console.log(`Boolean(0) ::::: >>>>> ${Boolean(0)}`);
  console.log(`Boolean(1) ::::: >>>>> ${Boolean(1)}`);
  console.log(`Boolean(-1) ::::: >>>>> ${Boolean(-1)}`);
  console.log(`Boolean(NaN) ::::: >>>>> ${Boolean(NaN)}`);
  console.log(`Boolean('') ::::: >>>>> ${Boolean('')}`);
  console.log(`Boolean('Something') ::::: >>>>> ${Boolean('Something')}`);
  console.log(`Boolean(null) ::::: >>>>> ${Boolean(null)}`);
  console.log(`Boolean(undefined) ::::: >>>>> ${Boolean(undefined)}`);
  console.log(`Boolean({}) ::::: >>>>> ${Boolean({})}`);
}
console.groupEnd();

////////////////////////////////////////////////////////////
// Loose (==) and Strict Equality (===)

console.group("Loose (==) and Strict Equality (===)")
{
  let input1 = prompt("What is your favourite Number")
  console.log(`input1: ${input1} and type is ${typeof input1}`)
  alert(`input1: ${input1} and type is ${typeof input1}`)
  input1 = Number(prompt("What is your favourite Number again"))
  console.log(`input1: ${input1} and type is ${typeof input1}`)
  alert(`input1: ${input1} and type is ${typeof input1}`)

  if (23 == "23") {
    console.log(`23 and "23" are lossely equal`)
  } else {
    console.log(`23 and "23" are not lossely equal`)
  }

  if (23 === "23") {
    console.log(`23 and "23" are strictly equal`)
  } else {
    console.log(`23 and "23" are not strictly equal`)
  }
}
console.groupEnd()
