function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID"
  let result = []
  for (let i = n; i < m; i += n) {
    result.push(i)
  }
  return result.reduce((acc, cur) => acc + cur)
}

console.log(sumMul(2, 9)) //20
console.log(sumMul(3, 13)) //30
console.log(sumMul(4, 123)) //1860
console.log(sumMul(4, -7)) //INVALID
