function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq)
  if (sqrt % 1 === 0) {
    const plus = sqrt + 1
    return plus * plus
  }

  return -1
}

console.log(findNextSquare(114))
console.log(findNextSquare(121))
