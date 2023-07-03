function reverseLetter(str) {
  const reversed = str.split("").reverse().join("")
  const result = reversed.replace(/[^a-zA-Z]/g, "")
  return result
}

console.log(reverseLetter("krishan")) //nahsirk
console.log(reverseLetter("ultr53o?n")) //nortlu
console.log(reverseLetter("ab23c")) //cba
