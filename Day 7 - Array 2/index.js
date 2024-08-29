const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2010 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every 
// Array.prototype.some() 
// is at least one person 19 or older?
const someOlder = people.some(person => (2024 - person.year) > 18);
console.log(someOlder)
    
// Array.prototype.every()
// is everyone 19 or older?
const allOlder = people.every(person => (2024 - person.year) > 18);
console.log(allOlder);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
    
// Array.prototype.findIndex()
// Find the comment with this ID
const commentIndex = comments.findIndex(comment => comment.id === 823423);
console.log(commentIndex);

// Array.prototype.slice(index, 1)
// delete the comment with the ID of 823423
comments.splice(commentIndex, 1);

const newComments = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex)];