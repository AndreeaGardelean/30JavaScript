const list = document.querySelector('#bands');

console.log(list.innerHTML)
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

// This function uses regular expressions to replace the words a, an, the from the start of a string with an empty space
function strip(string) {
  return string.replace(/^(a |the |an )/i, '').trim('');
}

const sortedBands = bands.sort((a, b) => {
  // this solution splits the name in an array of words and checks if the first word of the array is either a, an, the and if it is the index is moved to the next word in the array
  // then the words pointed by the index are compared
  // not an ideal solution because it is very long, cumbersome and not optimal
  
  // const first = a.split(' ');
  // const second = b.split(' ');

  // let firstIndex = 0;
  // let secondIndex = 0;

  // const eliminate = ['A', 'An', 'The']

  // if (eliminate.includes(first[0])) {
  //   firstIndex = 1;
  //   console.log(eliminate.includes(first[0]))
  // }

  // if (eliminate.includes(second[0])) {
  //   secondIndex = 1;
  // }

  if(strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
});
  
  
list.innerHTML = sortedBands.map(band => {
  return `
    <li>
      ${band}
    </li>
  `
}).join('');

