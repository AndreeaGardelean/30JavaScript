
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// filter is similar to a for loop, will iterate over every element of the map and will return that element if the given condition is true
// Note: the condition is after => in the parenthesis ()

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 16000));

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// Map takes an array, does something tot hat array and returns another array of the same length
const names = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(names)

// Array.prototype.sort()
// 3. Sort the inventors by birth-date, oldest to youngest
// sort will get you 2 items, a and b and you need to sort only these 2 items. You return 1 or -1 and JS will do the rest
const sorted = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

console.table(sorted);

// this is a shorter version of writing if-else statement using a ternary operator
// condition ? true : false

const shorterSorted = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(shorterSorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// reduce gives a simpler solution to adding items together
// returns the last returned total and the current item

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => (a.last - a.year) > (b.last - b.year) ? 1 : -1);

console.table(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');

// const links = Array.from(category.querySelectorAll('a'));


// const boulevards = links.map(link => link.textContent);

// const de = boulevards.filter(boulevard => (boulevard.includes('de')));

// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((a, b) => {
  const partsA = a.split(', ');
  const partsB = b.split(', ');

  return partsA[1] > partsB[1] ? 1 : -1; 
  }
)

console.log(sortedPeople)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const instances = data.reduce((obj, instance) => {
  if (obj[instance]) {
    obj[instance] ++;
  } else {
    obj[instance] = 1;
  }
  return obj;
}, {})

console.log(instances);