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
// not solved

const reverseNumber = (num) => {
  let n = num.toString()
  let nArray = n.split('')
  let resultArray = []
  let negHolder = ''

  nArray.forEach((element) => {
    if (element === '-') {
      negHolder = element
    } else resultArray.push(element)
  })
  resultArray.reverse()
  resultArray.join('')

  console.log(parseInt(negHolder + resultArray.join('')))
}

reverseNumber(123)
// reverseNumber(-543)
// reverseNumber(876)
