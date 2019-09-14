'use strict';

const inc = require('../../excercises/02-DataTypes/2-scalar').inc;

const cases = [
  [0, 1],
  [1, 2],
  [-1, 0],
  [10000, 10001],
];

test('inc', () => {
  for (const c of cases) {
    expect(inc(c[0])).toBe(c[1]);
  }
});
