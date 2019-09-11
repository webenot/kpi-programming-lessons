'use strict';

const average = (a, b) => (a + b) / 2;

const square = x => x * x;

const cube = x => x * x * x;

const VALUE = 3;

console.log(average(square(VALUE), cube(VALUE)));
