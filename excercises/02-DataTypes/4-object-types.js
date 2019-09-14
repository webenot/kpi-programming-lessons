'use strict';

const countTypes = arr => {
  const typesCounts = {};

  for (const el of arr) {
    const type = typeof el;
    if (!typesCounts[type]) {
      typesCounts[type] = 1;
    } else {
      typesCounts[type]++;
    }
  }

  return typesCounts;
};

module.exports = { countTypes };
