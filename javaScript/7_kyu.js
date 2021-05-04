// Problem: Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
// Solved

const getCount = (str) => {
  let vowelsCount = 0
  const vowelsArray = ['a', 'e', 'i', 'o', 'u']
  const charArray = str.split('')

  for (let i = 0; i < charArray.length; i++) {
    vowelsArray.filter((vowel) => {
      if (charArray[i] === vowel) {
        vowelsCount += 1
      }
    })
  }
  console.log(vowelsCount)
}

// getCount('abracadabra')
// getCount('pear tree')
getCount('The quick brown fox jumps over the lazy dog')
