function zeros(n) {
  let result = 0

  while (n >= 5) {
    n = Math.floor(n / 5)
    result += n
  }

  return result
}

console.log(zeros(0)) //0
console.log(zeros(5)) //1
console.log(zeros(6)) //1
console.log(zeros(12)) //2
console.log(zeros(30)) //7
