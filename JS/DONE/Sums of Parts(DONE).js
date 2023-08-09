function partsSums(ls) {
  let sum = ls.reduce((acc, cur) => acc + cur, 0)
  return [sum, ...ls.map((el) => (sum -= el))]
}

console.log(partsSums([0, 1, 3, 6, 10])) //[20, 20, 19, 16, 10, 0]
console.log(partsSums([1, 2, 3, 4, 5, 6])) //[21, 20, 18, 15, 11, 6, 0]
