// In case of variables if we update the original value of the original variable the copy will not be updated
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

// 
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
console.log(players, team);

// update players

// If the original array is updated then the 'copy' will also be updated
players[1] = 'New Sarah';
console.log(players, team);

// If we update the copy the the original array is also updated
team[2] = 'New Ryan';
console.log(players, team);

// The above behavior happens because player is a reference to the array and when team gets assigned players (i.e: team = players) we pass in a reference to the array not a copy of it

// make a copy of an array
// 1. Use slice without any arguments to make a copy
const team2 = players.slice();

// 2. Concatenate the array you want to copy to an empty array
const team3 = [].concat(players);

// 3. Use ES6 Spread which takes each item of the array and adds it to the new array
const team4 = [...players];

// 4. Use Array.from() method
const team5 = Array.from(players);

// -----------------------------------------------------------
// Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// same case as for arrays, the 'copy' gets a reference thus updating either the copy or the original object will result in updating both
const captain = person;
captain.number = 99;
console.log(person, captain);

const captain2 = Object.assign({}, person, { phone : '0123456789' });
console.log(person, captain2);

// Deep cloning
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

// Convert the JSON to a string then the string back to JSON
const dev2 = JSON.parse(JSON.stringify(wes));