// DESCRIPTION:

// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// SOLUTIONS:

function isItLetter(character) {
   return typeof character === 'string' && character.length === 1 && /[a-zA-Z]/.test(character);
}
