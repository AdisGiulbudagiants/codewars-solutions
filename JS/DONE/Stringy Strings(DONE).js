function stringy(size) {
  let res = ""
  while (res.length !== size) {
    for (let i = 1; i <= size; i++) {
      i % 2 === 0 ? (res += "0") : (res += "1")
    }
  }
  return res
}

console.log(stringy(1)) //'1'
console.log(stringy(4)) //'1010'
console.log(stringy(6)) //'101010'
console.log(stringy(12)) //'101010101010'
