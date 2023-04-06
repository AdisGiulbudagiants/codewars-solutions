function positiveSum(arr) {
  let sum = 0
  arr.forEach((el) => {
    if (el > 0) {
      sum += el
    }
  })
  return sum
}

console.log(positiveSum([1, -3, 4, -8, 6]))
