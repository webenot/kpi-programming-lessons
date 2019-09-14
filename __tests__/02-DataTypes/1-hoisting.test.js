'use strict';

const sayHello = require('../../excercises/02-DataTypes/1-hoisting').sayHello;

const name = 'World';

test('sayHello', () => {
  expect(sayHello(name)).toBe(`Hello, ${name}!`);
});
