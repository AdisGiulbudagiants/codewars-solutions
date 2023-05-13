function sumTwoSmallestNumbers(numbers) {
  const res = numbers.sort((a, b) => a - b)
  return res[0] + res[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
