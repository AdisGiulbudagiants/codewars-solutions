function factorial(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  if (n < 0 || n > 12) throw new Error("ArgumentOutOfRangeException")
  return n === 0 ? 1 : arr.reduce((acc, cur) => acc * cur)
}

console.log(factorial(0)) //1
console.log(factorial(1)) //1
console.log(factorial(2)) //2
console.log(factorial(3)) //6
console.log(factorial(4)) //24
console.log(factorial(5)) //120
console.log(factorial(13)) //120
