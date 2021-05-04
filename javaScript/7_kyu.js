// Problem: Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// Solved: need to refactor

const getCount = (str) => {
  let vowelsCount = 0
  const charArray = str.split('')
  for (let i = 0; i < charArray.length; i++) {
    if (
      charArray[i].includes('a') ||
      charArray[i].includes('e') ||
      charArray[i].includes('i') ||
      charArray[i].includes('o') ||
      charArray[i].includes('u') === true
    ) {
      vowelsCount += 1
    }
  }
  //   console.log(vowelsCount)
}

// getCount('abracadabra')
// getCount('pear tree')
getCount('The quick brown fox jumps over the lazy dog')
