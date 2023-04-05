const pairZeros = (arr) => {
  let zero = 0
  return arr.filter((num) => {
    return num != 0 || zero++ % 2 == 0
  })
}

console.log(pairZeros([1, 0, 2, 3, 0, 4, 0, 8, 0]))
