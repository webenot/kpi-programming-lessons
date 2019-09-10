'use strict';

//eslint error - variable is never reassigned
let userName = 'Halyna';
const YEAR_OF_BIRTH = 1982;

const printHello = name => {
  console.log(`Hello, ${name}`);
};

printHello('world');

printHello(userName);
printHello(YEAR_OF_BIRTH);
