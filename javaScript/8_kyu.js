// Problem: Conver boolean values to dtrings 'Yes' or 'No'.
// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
// Solved

const boolToWord = (bool) => {
  return bool ? 'Yes' : 'No'
}

// console.log(boolToWord(false))

// Problem: Couning sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Solved

function countSheeps(arrayOfSheep) {
  let count = 0
  arrayOfSheep.forEach((sheep) => {
    if (sheep) count += 1
  })
  return count
}
