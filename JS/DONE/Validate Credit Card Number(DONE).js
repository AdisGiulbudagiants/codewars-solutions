function validate(n) {
  const reversedArr = n
    .toString()
    .split("")
    .reverse()
    .map((el, index) => {
      if (index % 2 !== 0) {
        const mult = Number(el) * 2
        if (mult > 9) {
          return el
            .split("")
            .map((el) => Number(el))
            .reduce((acc, cur) => acc + cur)
        }
        return mult
      }
      return Number(el)
    })
    .reduce((acc, cur) => acc + cur)

  return reversedArr % 10 == 0
}

console.log(validate(891)) //false
console.log(validate(1)) //false
console.log(validate(123)) //false
console.log(validate(2121)) //true
console.log(validate(1230)) //true
console.log(validate(12345)) //true
