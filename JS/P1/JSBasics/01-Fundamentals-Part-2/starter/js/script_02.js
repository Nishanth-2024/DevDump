'use strict';

///////////////////////////////////////
// Declaring and call/invoke/run a function

console.group("Functions calling another functions")
{
  function cutPieces(fruit) {
    return fruit * 4
  }

  function fruitSalad(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)

    const salad = `A fruit salad with ${applePieces} of apple and ${orangePieces} of oranges is prepared`;
    console.log(salad);
    return salad;
  }

  console.log(fruitSalad(2, 4));
}
console.groupEnd();

