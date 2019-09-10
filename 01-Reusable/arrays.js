'use strict';

const usersData = [
  {
    name: 'Marcus Aurelius',
    phone: '+380445554433'
  }
];

const findPhoneByName = name => {
  for (const person of usersData) {
    if (name === person.name) {
      return person.phone;
    }
  }
};

console.log(findPhoneByName('Marcus Aurelius'));
