'use strict';

const countTypes = require('../../excercises/02-DataTypes/4-object-types').countTypes;

const cases = [
  [[true, true, false], { 'boolean': 3 }],
  [[1, true, 'hello'], { 'number': 1, 'boolean': 1, string: 1 }],
  [[1, 2, true, false, 'a', 'b'], { 'number': 2, 'boolean': 2, string: 2 }],
];

test('countTypes', () => {
  for (const c of cases) {
    expect(countTypes(c[0])).toStrictEqual(c[1]);
  }
});