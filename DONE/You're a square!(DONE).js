const isSquare = function (n) {
  if (n < 0) return false
  const res = Math.sqrt(n)
  return res % 1 === 0 ? true : false
}
console.log(isSquare(4))
