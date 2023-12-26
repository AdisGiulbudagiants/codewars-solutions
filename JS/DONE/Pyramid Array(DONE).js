function pyramid(n) {
  if (n <= 0) return []
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(new Array(i).fill(1))
  }
  return result
}

console.log(pyramid(0)) //[ ]
console.log(pyramid(1)) //[ [1] ]
console.log(pyramid(2)) //[ [1], [1, 1] ]
console.log(pyramid(3)) //[ [1], [1, 1], [1, 1, 1] ]
