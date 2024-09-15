////////////////////////////////////////////////////////////
// Strings and template reference
////////////////////////////////////////////////////////////

console.group('Strings and template reference');
{
const personFirstName = 'FirstName'
const personLastName = 'LastName'

const personBirthYear = 1764
const personYear = 2024
const personJob = 'teacher'

const personDescription1 = 'I\'m ' + personFirstName + ', a ' + (personYear - personBirthYear) + ' years old ' + personJob + '!'
console.log(personDescription1)

const personDescription2 = `I'm ${personFirstName}, a ${personYear - personBirthYear} years old ${personJob}!`
console.log(personDescription2)
}

console.groupEnd();