function checkDigit(number, index1, index2, digit) {
  const sortedIndexes = [index1, index2].sort((a, b) => a - b)
  return number
    .toString()
    .split("")
    .filter((_, index) => {
      return index >= sortedIndexes[0] && index <= sortedIndexes[1]
    })
    .map((el) => parseInt(el))
    .includes(digit)
}

console.log(checkDigit(12345678912345, 1, 0, 1)) //true
console.log(checkDigit(12345678912345, 0, 1, 2)) //true
console.log(checkDigit(67845123654000, 4, 2, 5)) //true
console.log(checkDigit(66688445364856, 0, 0, 6)) //true
console.log(checkDigit(87996599994565, 2, 5, 1)) //false
