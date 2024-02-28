function largestPairSum(numbers) {
  const sortedArr = numbers.sort((a, b) => b - a)
  return sortedArr[0] + sortedArr[1]
}

console.log(largestPairSum([10, 14, 2, 23, 19])) //42
console.log(largestPairSum([99, 2, 2, 23, 19])) //122
