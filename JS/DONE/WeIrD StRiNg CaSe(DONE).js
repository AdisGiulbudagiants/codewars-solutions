function toWeirdCase(string) {
  return string
    .split(" ")
    .map((el) => {
      return el
        .split("")
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        })
        .join("")
    })
    .join(" ")
}

console.log(toWeirdCase("String")) //StRiNg
console.log(toWeirdCase("Weird string case")) //WeIrD StRiNg CaSe
