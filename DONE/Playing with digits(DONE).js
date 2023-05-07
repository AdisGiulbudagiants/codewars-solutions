function digPow(n, p) {
  const arr = n.toString().split("")
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], p + i)
  }
  return Number.isInteger(sum / n) ? sum / n : -1
}

console.log(digPow(89, 1))
console.log(digPow(92, -1))
console.log(digPow(46288, 3))
