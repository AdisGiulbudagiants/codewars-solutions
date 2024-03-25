function halvingSum(n) {
  let sum = 0
  for (let i = 1; n >= i; i *= 2) {
    sum += Math.floor(n / i)
  }
  return sum
}

console.log(halvingSum(25)) //47
console.log(halvingSum(127)) //247
