function divisibleCount(x, y, k) {
  const lower = Math.floor((x - 1) / k)
  const upper = Math.floor(y / k)
  return upper - lower
}

console.log(divisibleCount(6, 11, 2)) //3
