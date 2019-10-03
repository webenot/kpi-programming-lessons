'use strict';

const countTypes = arr => {
  const typesCounts = {};

  for (const el of arr) {
    const type = typeof el;
    typesCounts[type] = ++typesCounts[type] || 1;
  }

  return typesCounts;
};

module.exports = { countTypes };
