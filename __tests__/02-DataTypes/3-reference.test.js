'use strict';

const inc = require('../../excercises/02-DataTypes/3-reference').inc;

const cases = [
  [{ n: 0 }, undefined],
  [{ n: 1 }, undefined],
  [{ n: -1 }, undefined],
  [{ n: 10000 }, undefined],
];

test('inc', () => {
  for (const c of cases) {
    expect(inc(c[0])).toBe(c[1]);
  }
});