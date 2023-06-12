function getDivisorsCnt(n) {
  let count = 0
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++
      if (i * i !== n) {
        count++
      }
    }
  }
  return count
}

console.log(getDivisorsCnt(4)) //3
console.log(getDivisorsCnt(5)) //2
console.log(getDivisorsCnt(12)) //6
console.log(getDivisorsCnt(30)) //8
console.log(getDivisorsCnt(54)) //8
console.log(getDivisorsCnt(500000)) //42
