function twoArePositive(a, b, c) {
  let result = 0
  if (a > 0) result++
  if (b > 0) result++
  if (c > 0) result++
  return result === 2
}

console.log(twoArePositive(2, 4, -3)) //true
console.log(twoArePositive(-4, 6, 8)) //true
console.log(twoArePositive(4, -6, 9)) // true
console.log(twoArePositive(-4, 6, 0)) // false
console.log(twoArePositive(4, 6, 10)) // false
console.log(twoArePositive(-14, -3, -4)) // false
