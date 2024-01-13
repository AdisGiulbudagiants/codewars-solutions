function whatCentury(year) {
  const century = Math.ceil(year / 100)
  if (century % 100 >= 11 && century % 100 <= 13) return century + "th"

  const lastNum = century % 10
  const suffix =
    lastNum === 1 ? "st" : lastNum === 2 ? "nd" : lastNum === 3 ? "rd" : "th"
  return century + suffix
}

console.log(whatCentury("1999")) //20th
console.log(whatCentury("2011")) //21st
console.log(whatCentury("2154")) //22nd
console.log(whatCentury("2259")) //23rd
console.log(whatCentury("2000")) //20th
