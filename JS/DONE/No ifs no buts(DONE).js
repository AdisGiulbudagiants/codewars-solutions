function noIfsNoButs(a, b) {
  const words = [" is smaller than ", " is equal to ", " is greater than "]
  return a + words[Math.sign(a - b) + 1] + b
}

console.log(noIfsNoButs(45, 51)) //"45 is smaller than 51"
console.log(noIfsNoButs(-3, 2)) //"-3 is smaller than 2"
console.log(noIfsNoButs(-4, -7)) //"-4 is greater than -7"
console.log(noIfsNoButs(100, 100)) //"100 is equal to 100"
