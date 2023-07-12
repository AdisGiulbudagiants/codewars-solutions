function sumDigits(number) {
  return number
    .toString()
    .split("")
    .filter((item) => {
      return item !== "-"
    })
    .reduce((acc, cur) => acc + parseInt(cur), 0)
}

console.log(sumDigits(10)) //1
console.log(sumDigits(99)) //18
console.log(sumDigits(-32)) //5
