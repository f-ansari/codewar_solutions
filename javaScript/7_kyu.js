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
  // console.log(vowelsCount)
}

// getCount('abracadabra')
// getCount('pear tree')
// getCount('The quick brown fox jumps over the lazy dog')

// Problem: Reverse a Number
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/javascript
// Solved

const reverseNumber = (n) =>
  (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')

// reverseNumber(123)
// console.log(reverseNumber(-543))
// reverseNumber(876)

// Problem: List Filtering
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// not solved

const filter_list = (l) => {}

filter_list([1, 2, 'aasf', '1', '123', 123])
