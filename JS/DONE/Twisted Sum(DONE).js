function twistedSum(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
      .toString()
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0)
  }
  return sum
}

console.log(twistedSum(3)) //6
console.log(twistedSum(4)) //10
console.log(twistedSum(10)) //46
console.log(twistedSum(11)) //48
console.log(twistedSum(12)) //51
