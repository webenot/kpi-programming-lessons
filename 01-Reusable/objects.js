'use strict';

const person = {
  name: 'Marcus'
};

let person2 = {
  name: 'Aurelius'
};

console.log(person);
console.log(person2);

// works - we put value into the objects field,
// but do not change the value of objects reference
person.name = 'World';

person2.name = 'World'; // works

console.log(person);
console.log(person2);

// person = {}; - thows exception,
// because we try to change the value of constant

// works, because person2 is a variable and we can change it's value
person2 = {};

console.log(person);
console.log(person2);

const createUser = (name, city) => ({ name, city });

console.log(createUser('Marcus Aurelius', 'Roma'));
