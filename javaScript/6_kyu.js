// Problem: Highest Scoring Word
// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
// Not Solved

const high = (x) => {
  let alaphabets = 'abcdefghijklmnopqrstuvwxyz'
  const alphaArray = alaphabets.split('')
  const wordsArray  = x.split(' ')
  let highestCount = 0
  let currentCount = 0
  // console.log(sentence)

  wordsArray.forEach(word => {
    for (char in word) {
      alphaArray.forEach((alphabet, i) => {
        const alaphabetValue = i + 1
        if (char = alphabet) currentCount += alaphabetValue
        });
    }
  console.log(currentCount)
  });
}

high('man i need a taxi up to ubud')

// Problem: Highest Rank Number in an Array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
// Not Solved

const highestRank = (arr) => {
  //set up problem
}