const Kamie = 'Kamie';
console.log(Kamie);

const gold = 'alchemy rocks gold';
const split = gold.split(' ');
console.log(split);

const newSplit = split.map((word) => word.split(''));
console.log(newSplit);

const firstReverse = newSplit.map((word) => word.reverse());
console.log(firstReverse);

const next = firstReverse.map((word) => word.join(''));
console.log(next);

const final = next.join(' ');
console.log(final);

// function titleCase(sentence) {
//   return sentence
//     .split(' ')
//     .map((word) => [0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }
// titleCase('aLchemY roCkS gOLD');
// console.log(titleCase);

function oddishOrEvenish(number) {
  const sum = number
    .toString()
    .split('')
    .reduce((total, n) => {
      total += Number(n);
      return total;
    }, 0);

  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
}

oddishOrEvenish(121);

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

function fizzBuzz(number) {
  for (i = 1; i < number; i++) {
    if (i % 15 == 0) console.log('fizzbuzz');
    if (i % 3 == 0) console.log('fizz');
    if (i % 5 == 0) console.log('buzz');
  }
}
return fizzBuzz(25);

function anagrams(wordOne, wordTwo) {
  for (let i = 0; i < wordOne.length; i++)
    if (wordTwo.indexOf(wordOne[i]) === -i) return false;
}

anagrams('superintended', 'unpredistined');
