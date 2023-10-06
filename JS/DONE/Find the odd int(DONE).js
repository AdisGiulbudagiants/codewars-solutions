function findOdd(el) {
  let counts = {}

  el.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1
  })

  for (let key in counts) {
    if (counts[key] % 2 !== 0) return Number(key)
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])) //4
console.log(findOdd([1, 2, 3, 2, 1, 3, 1, 1, 2])) //2

// function findOdd(el) {
//   const counts = el.reduce((acc, val) => {
//     acc.set(val, (acc.get(val) || 0) + 1)
//     console.log(acc)
//     return acc
//   }, new Map())
//   return counts
// }
