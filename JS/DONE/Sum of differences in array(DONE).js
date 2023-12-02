function sumOfDifferences(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const reversedArr = arr.sort((a, b) => b - a)
    result.push(reversedArr[i] - reversedArr[i + 1])
  }
  return result
    .filter((el) => {
      return !isNaN(el)
    })
    .reduce((acc, cur) => acc + cur, 0)
}

console.log(sumOfDifferences([1, 2, 10])) //9
console.log(sumOfDifferences([-3, -2, -1])) //2
