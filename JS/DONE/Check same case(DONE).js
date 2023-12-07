function sameCase(a, b) {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1
  if (a === a.toUpperCase() && b === b.toUpperCase()) return 1
  if (a === a.toLowerCase() && b === b.toLowerCase()) return 1
  return 0
}

console.log(sameCase("C", "B")) //1
console.log(sameCase("b", "a")) //1
console.log(sameCase("A", "s")) //0
console.log(sameCase("	", "Z")) //-1
console.log(sameCase("H", ":")) //-1
