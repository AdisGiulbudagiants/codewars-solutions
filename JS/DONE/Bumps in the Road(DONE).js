function bump(x) {
  let bumpsAmount = 0
  for (let char of x) {
    if (char === "n") bumpsAmount++
  }
  return bumpsAmount <= 15 ? "Woohoo!" : "Car Dead"
}

console.log(bump("n")) //"Woohoo!"
console.log(bump("__nn_nnnn__n_n___n____nn__nnn")) //"Woohoo!"
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")) //"Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")) //"Car Dead"
