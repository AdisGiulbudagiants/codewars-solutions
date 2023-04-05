function sumEvenNumbers(input) {
  return input
    .filter((el) => {
      return el % 2 === 0
    })
    .reduce((acc, cur) => acc + cur, 0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))
