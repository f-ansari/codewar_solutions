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
// solved

const filter_list = (l) => {
  let results = []

  l.filter((element) => {
    if (typeof element === 'number' && element >= 0) results.push(element)
  })
  return results
}

filter_list([1, 2, 'aasf', '1', '123', 123])

// Problem: Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// not solved

const findShort = (s) => {
  const wordsArray = s.split(' ')
  let checker = wordsArray[0]

  wordsArray.forEach((word) => {
    if (word.length < checker.length) checker = word
  })
  return checker.length
}

findShort('bitcoin take over the world maybe who knows perhaps')

// Problem: Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// Solved

const highAndLow = (number) => {
  const numArray = number.split(' ')
  maxChecker = parseInt(numArray[0])
  minChecker = parseInt(numArray[0])

  numArray.forEach((num) => {
    if (parseInt(num) > maxChecker) maxChecker = parseInt(num)
    if (parseInt(num) < minChecker) minChecker = parseInt(num)
  })
  return `${maxChecker} ${minChecker}`
}

// highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')

// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))
// console.log(highAndLow('1 2 3 4 5'))
// console.log(highAndLow('0 2'))

// Problem: I'm everywhere
// https://www.codewars.com/kata/6097a9f20d32c2000d0bdb98/train/javascript
// Solved

const i = (word) => {
  const wordVowelChecker = (word) => {
    let vowelCount = 0
    let otherCharCount = 0

    for (char in word) {
      let lowerWord = word.toLowerCase()

      if (
        lowerWord[char] === 'a' ||
        lowerWord[char] === 'e' ||
        lowerWord[char] === 'i' ||
        lowerWord[char] === 'o' ||
        lowerWord[char] === 'u'
      )
        vowelCount++
      else otherCharCount++
    }

    if (vowelCount >= otherCharCount) return true
  }

  if (
    word === '' ||
    word.charAt(0) === 'I' ||
    word.charAt(0) !== word.charAt(0).toUpperCase() ||
    wordVowelChecker(word) === true
  )
    return 'Invalid word'
  else return `i${word}`
}

//test cases
i('Phone')
i('World')
i('Human')
i('Programmer')

//test cases to set condition for
// i('')
// i('Inspire')
// i('East')
// i('road')

// Problem: Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Solved

const reverseWords = (str) => {
  const wordsArray = str.split(' ')
  let newStr = ''

  wordsArray.forEach((word) => {
    const wordArray = word.split('').reverse().join('')
    newStr += ` ${wordArray}`
  })
  const finalStr = newStr.split(' ').splice(1, Infinity).join(' ')
  return finalStr
}

reverseWords('The quick brown fox jumps over the lazy dog.')

// Problem: Remove anchor from URL
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
// Solved

const removeUrlAnchor = (url) => {
  const urlArray = url.split('')
  let noAnchorUrl = urlArray.join('')

  urlArray.filter((element, i) => {
    if (element === '#') {
      noAnchorUrl = urlArray.slice(0, i).join('')
    } 
  })
  console.log(noAnchorUrl)
  // return noAnchorUrl
}

removeUrlAnchor('www.codewars.com#about')
removeUrlAnchor('www.codewars.com/katas/?page=1#about')
removeUrlAnchor('www.codewars.com/katas/')
