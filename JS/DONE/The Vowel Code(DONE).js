function encode(string) {
  return string
    .split("")
    .map((el) => {
      if (el == "a") return 1
      if (el == "e") return 2
      if (el == "i") return 3
      if (el == "o") return 4
      if (el == "u") return 5
      return el
    })
    .join("")
}

function decode(string) {
  return string
    .split("")
    .map((el) => {
      if (el == "1") return "a"
      if (el == "2") return "e"
      if (el == "3") return "i"
      if (el == "4") return "o"
      if (el == "5") return "u"
      return el
    })
    .join("")
}

console.log(encode("hello")) //'h2ll4'
console.log(encode("How are you today?")) //'H4w 1r2 y45 t4d1y?'
console.log(encode("This is an encoding test.")) //'Th3s 3s 1n 2nc4d3ng t2st.'
console.log(decode("h2ll4")) //'hello'
