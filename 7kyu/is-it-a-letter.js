// DESCRIPTION:

// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// SOLUTIONS:

function isItLetter(character) {
   return typeof character === 'string' && character.length === 1 && /[a-zA-Z]/.test(character);
}

const arr = [
   9, 45, 53, 10, 100, 30, 85, 72, 69, 93, 98, 27, 73, 82, 91, 60, 5, 79, 88, 18, 71, 36, 44, 22, 89, 40, 59, 80, 81, 67, 25, 54, 13,
];
const arr2 = [];
arr2.concat(arr, arr2);
arr2.sort((a, b) => a - b);
console.log(arr2);
