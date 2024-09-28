'use strict';

///////////////////////////////////////
// Iterations and Loops

console.group("Iterations and Loops")
{
  console.group('for')
  for(let rep = 0; rep < 10; rep++) {
    console.log(`current Repetition: rep`)
  }
  console.groupEnd();

  console.group('Object Iteration')
  const objectToIterate = {
    key1: "value1",
    key2: 102,
    key3: null,
    key4: undefined,
    key5: 0,
    key6: true,
    key7: NaN,
    key8: function(){console.log(`this is key 8 function`)}
  }
  console.log(`objectToIterate: `)
  console.log(objectToIterate)

  console.group('for-in')
  for (const key in objectToIterate) {
    if (Object.prototype.hasOwnProperty.call(objectToIterate, key)) {
      const element = objectToIterate[key];
      console.log(element)
    }
  }
  console.groupEnd()
  console.groupEnd()

  console.group('Array iteration')
  const arrayToIterate = [
    "value1", 102,
    null, undefined,
    0, true, NaN,
    function(){console.log(`this is key 9 function`)}
  ]
  console.group('for-of')
  for (const element of arrayToIterate) {
    console.log(element)
  }
  console.groupEnd()
  console.group('for-in')
  for (const index in arrayToIterate) {
    console.log(`index: ${index}, element: ${arrayToIterate[index]}`)
  }
  console.groupEnd()
}
console.groupEnd();



