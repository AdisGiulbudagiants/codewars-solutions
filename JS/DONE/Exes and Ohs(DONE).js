function XO(str) {
  if (str.includes("x") === false && str.includes("o") === false) return true
  let x = 0
  let o = 0
  for (const char of str) {
    if (char.toLowerCase() === "x") x++
    if (char.toLowerCase() === "o") o++
  }
  return x === o
}

console.log(XO("ooxx")) //true
console.log(XO("xooxx")) //false
console.log(XO("zpzpzpp")) //true
console.log(XO("zzoo")) //false
