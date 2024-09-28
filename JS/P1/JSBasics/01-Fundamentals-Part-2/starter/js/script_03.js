'use strict';

///////////////////////////////////////
// Arrays

console.group("Arrays - Declaration")
{
  const array1 = [1, 2, 3, 4, 5]
  const array2 = new Array(1, 2, 3, 4, 5)
  const array3 = [1, null, undefined, Infinity, NaN, "Some", { key: "value" }, array1, array2]

  console.log(`array1: ${array1}`)
  console.log(`array2: ${array2}`)
  console.log(`array3: ${array3}`)

  console.log(`
    array1 Length: ${array1.length},
    array2 Length: ${array2.length}
    array3 Length: ${array3.length}
    `)
}
console.groupEnd();

console.group("Arrays - Push and Pop")
{
  const years = [1998, 1967, 1956, 1999, 2005]
  console.log(years)
  console.log(`length after push: ${years.push(2001)}`)
  console.log(`popped correct element ${years.pop() === 2001}`)
  console.log(years)
}
console.groupEnd();


console.group("Arrays - Shift and UnShift")
{
  const years = [1998, 1967, 1956, 1999, 2005]
  console.log(years)
  console.log(`length after unshift: ${years.unshift(3056)}`)
  console.log(`shifted correct element ${years.shift() === 3056}`)
  console.log(years)
}
console.groupEnd();

console.group("Arrays - indexOf and includes")
{
  const years = [1998, 1967, 1956, 1999, 2005]
  console.log(years)
  console.log(`years.indexOf(1967): ${years.indexOf(1967)}`);
  console.log(`years.includes(1967): ${years.includes(1967)}`);
  console.log(`years.indexOf(1900): ${years.indexOf(1900)}`);
  console.log(`years.includes(1900): ${years.includes(1900)}`);
}
console.groupEnd();


