function factorial(n) {
  if (n == 0) return 1
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i)
  }
  return result.reduce((acc, cur) => acc * cur)
}

console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(4)) //24
console.log(factorial(7)) //5040
console.log(factorial(17)) //355687428096000
