'use strict';

const usersData = {
  'Marcus Aurelius': '+380445554433'
};

const findPhoneByName = name => usersData[name];

console.log(findPhoneByName('Marcus Aurelius'));
