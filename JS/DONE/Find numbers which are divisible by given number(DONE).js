function divisibleBy(numbers, divisor) {
  let res = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      res.push(numbers[i])
    }
  }
  return res
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2)) //[2, 4, 6]
