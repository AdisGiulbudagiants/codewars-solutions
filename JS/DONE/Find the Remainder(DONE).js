function remainder(n, m) {
  return Math.min(n, m) === 0 ? NaN : Math.max(n, m) % Math.min(n, m)
}

console.log(remainder(17, 5)) //2
console.log(remainder(13, 72)) //7
console.log(remainder(0, -1)) //0
console.log(remainder(0, 1)) //NaN
