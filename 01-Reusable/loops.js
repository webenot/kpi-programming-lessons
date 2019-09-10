'use strict';

const MIN_VALUE = 15;
const MAX_VALUE = 30;

const range = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

range(MIN_VALUE, MAX_VALUE);
