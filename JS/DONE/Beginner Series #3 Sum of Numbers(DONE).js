function getSum(a, b) {
  if (a === b) return a
  let res = []
  let start = Math.min(a, b)
  let end = Math.max(a, b)
  for (let i = start; i <= end; i++) {
    res.push(i)
  }
  return res.reduce((acc, cur) => acc + cur, 0)
}

console.log(getSum(-1, 2))
