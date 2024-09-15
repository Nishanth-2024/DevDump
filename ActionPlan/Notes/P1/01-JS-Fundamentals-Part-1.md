# JS Fundamentals Part 1

- [JS Fundamentals Part 1](#js-fundamentals-part-1)
  - [What is JS?](#what-is-js)
  - [Types Of Values](#types-of-values)
    - [Primitives](#primitives)
  - [let const and var](#let-const-and-var)
  - [Operator Precedence](#operator-precedence)
  - [Type Conversion and Coersion](#type-conversion-and-coersion)
    - [Truthy and Falsy](#truthy-and-falsy)
  - [EcmaScript - Standards](#ecmascript---standards)

## What is JS?

- Javascript is a `high-level`, `object-oriented`, `multi-paradigm` programming language.
  - multi-paradigm language, meaning that it's so flexible and versatile, that we can use all kinds of different programming styles, such as imperative and declarative programming (different ways of structuring our code)
- javascript releases
  - ES5, ES6 (2015), ES7 (2016), ...

## Types Of Values

1. Objects
2. Primitives

  ```javascript
  // Object
  let me = {
    name: 'Nishanth'
  }

  // Primitive
  let name = 'Nishanth';
  let currentDateString = '15 September 2024';
  let age = 30;
  ```

### Primitives

- Number: Floating Point `let PI = 3.1415;`
- String: Sequence of Characters `let name = 'Nishanth';`
- Boolean: true/false `let is2Even = true;`
- Undefined: Unassigned / Not yet defined / Empty `let children;`
- Null: Empty but Assigned
- Symbol(introduced in ES2015): Value that is Unique and Cannot be changed
- BigInt(introduced in ES2020): Large Integers - larger than Number can hold

> **Note:** JS has Dynamic Typing
>
> Values have type. variables donot.

## let const and var

- var - outdated way to declare variable (FUNCTION SCOPED)
- let, const - variable and constant (BLOCK SCOPED) (introduced in ES6)

## Operator Precedence

Refer to <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table>

## Type Conversion and Coersion

- Conversion - manual type conversion
- Coersion - JS converts type implicitly in certain scenarios

### Truthy and Falsy

NaN, 0, '', null, undefined are the only falsy values.

## EcmaScript - Standards

TBD;
