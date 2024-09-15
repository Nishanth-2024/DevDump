////////////////////////////////////////////////////////////
// Basic Operators
////////////////////////////////////////////////////////////

console.group(`Basic Operators`);

console.group("");

console.log(`1/0 ::::: >>>> ${1 / 0}`); // Infinity
console.log(`-1/0 ::::: >>>> ${-1 / 0}`); // -Infinity
console.log(`1/-0 ::::: >>>> ${1 / -0}`); // -Infinity
console.log(`-1/-0 ::::: >>>> ${-1 / -0}`); // -Infinity
console.group("");
console.log(`NaN/-0 ::::: >>>> ${NaN / -0}`); // -Infinity

console.groupEnd();

console.group("");

console.log(`Infinity/0 ::::: >>>> ${Infinity / 0}`); // Infinity
console.log(`-Infinity/0 ::::: >>>> ${-Infinity / 0}`); // -Infinity
console.log(`Infinity/-0 ::::: >>>> ${Infinity / -0}`); // -Infinity
console.log(`-Infinity/-0 ::::: >>>> ${-Infinity / -0}`); // -Infinity

console.groupEnd();

console.group("");
{
  let x, y;
  x = y = 20 - 4 - 9;
  console.log(`let x, y; x = y = 20 - 4 - 9;`);
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  console.log(`x + y / 2 = ${x + y / 2}`);
  console.log(`(x + y) / 2 = ${(x + y) / 2}`);
  console.log(`x + (y / 2) = ${x + (y / 2)}`);
  console.log(`10 + 20 / 2 = ${10 + 20 / 2}`);
  console.log(`(10 + 20) / 2 = ${(10 + 20) / 2}`);
  console.log(`10 + (20 / 2) = ${10 + (20 / 2)}`);
}
console.groupEnd();

console.groupEnd();
