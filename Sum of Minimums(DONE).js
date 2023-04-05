const sumOfMinimums = (arr) => {
  return arr.map((el) => Math.min(...el)).reduce((a, b) => a + b, 0)
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [2, 3, 5, 6, 7],
    [4, 8, 10, 11, 7],
  ])
)
