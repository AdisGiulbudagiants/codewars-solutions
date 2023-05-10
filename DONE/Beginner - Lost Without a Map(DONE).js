function maps(x) {
  return x.map((el) => {
    return el * 2
  })
}

console.log(maps([1, 2, 3]))
console.log(maps([4, 1, 1, 1, 4]))
