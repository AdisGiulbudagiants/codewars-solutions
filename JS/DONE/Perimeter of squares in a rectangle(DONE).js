function perimeter(n) {
  if (n === 0) return 4

  let fib1 = 0
  let fib2 = 1
  let sum

  const result = []

  for (let i = 0; i <= n; i++) {
    sum = fib1 + fib2
    fib1 = fib2
    fib2 = sum
    result.push(fib1)
  }
  return 4 * result.reduce((acc, cur) => acc + cur, 0)
}

console.log(perimeter(0)) //4
console.log(perimeter(5)) //80
console.log(perimeter(7)) //216
console.log(perimeter(20)) //114624
console.log(perimeter(30)) //14098308
