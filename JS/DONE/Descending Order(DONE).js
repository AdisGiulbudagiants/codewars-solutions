function descendingOrder(n) {
  const res = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("")
  return parseInt(res)
}

console.log(descendingOrder(1021))
