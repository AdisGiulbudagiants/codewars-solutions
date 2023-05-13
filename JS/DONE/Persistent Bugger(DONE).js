function persistence(num) {
  let res = 0
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((acc, cur) => acc * parseInt(cur))
    res++
  }
  return res
}

console.log(persistence(39))
console.log(persistence(4))
console.log(persistence(25))
console.log(persistence(999))
