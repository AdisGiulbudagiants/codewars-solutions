function capitalize(s) {
  const even = s
    .split("")
    .map((el, index) => {
      return index % 2 == 0 ? el.toUpperCase() : el
    })
    .join("")
  const odd = s
    .split("")
    .map((el, index) => {
      return index % 2 !== 0 ? el.toUpperCase() : el
    })
    .join("")
  return [even, odd]
}

console.log(capitalize("abcdef")) //['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")) //['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")) //['AbRaCaDaBrA', 'aBrAcAdAbRa']
