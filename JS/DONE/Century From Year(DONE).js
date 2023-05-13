function century(year) {
  if (year % 100 === 0) {
    return Math.floor(year / 100)
  }
  return Math.floor(year / 100) + 1
}

console.log(century(1900))
console.log(century(1601))
console.log(century(2000))
console.log(century(89))
