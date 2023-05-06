function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(" ")
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
