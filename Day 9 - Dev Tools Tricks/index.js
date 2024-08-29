const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}
// Regular
console.log('hello');

// Interpolated
console.log('Hello I am  a %s string', 'interpolated');

// Styled
console.log('%c I am some great text', 'font-size: 20px; background: green;');

// warning!
console.warn('This is a warning');

// Error :|
console.error('this is an error');

// Info
console.info('this is an info');

// Testing
// only fires if assertion evaluates to false
console.assert(1 === 2, '1 === 2 is wrong');

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
// shows the element itself
console.log(p);

// shows all the elements living in the printed element
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(dog.name);
  console.log(dog.name);
  console.log(dog.age);
  console.groupEnd(dog.name);
});

// counting
console.count('Hello');
console.count('Hello');
console.count('Bye');
console.count('Hello');


// timing
console.time('fetching data');
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
  .then(response => { return response.json() })
  .then(data => {
    console.timeEnd('fetching data');
  });

console.table(dogs);