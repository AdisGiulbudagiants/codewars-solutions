function maxMultiple(divisor, bound) {
  let result = []
  for (let i = 1; i <= bound; i++) {
    if (i % divisor === 0) result.push(i)
  }
  return result[result.length - 1]
}

console.log(maxMultiple(2, 7)) //6
console.log(maxMultiple(3, 10)) //9
console.log(maxMultiple(7, 17)) //14
console.log(maxMultiple(10, 50)) //50
console.log(maxMultiple(37, 200)) //185
console.log(maxMultiple(7, 100)) //98
