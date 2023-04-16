const f = (x, y, z) => {
  const min = Math.min(x, y, z)
  let total = 0
  for (i = 0; i < min; ++i) {
    total += (x - i) * (y - i) * (z - i)
  }
  return total
}

console.log(f(3, 3, 3))
