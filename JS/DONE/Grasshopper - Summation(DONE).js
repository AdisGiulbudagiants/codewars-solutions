function summation(num) {
  let arr = 0
  for (let i = 1; i <= num; i++) {
    arr += i
  }
  return arr
}

console.log(summation(8))
