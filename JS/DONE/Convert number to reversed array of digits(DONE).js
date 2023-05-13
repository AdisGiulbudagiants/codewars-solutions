function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse("")
    .map((el) => {
      return parseInt(el)
    })
}

console.log(digitize(35231))
