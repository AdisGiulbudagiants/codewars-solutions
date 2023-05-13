function duplicateEncode(word) {
  const str = word.toLowerCase().split("")
  return str
    .map((letter, arr) =>
      arr.filter((l) => l === letter).length > 1 ? ")" : "("
    )
    .join("")
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))
console.log(duplicateEncode("Success")) // )())())
console.log(duplicateEncode("(( @")) // ))((
