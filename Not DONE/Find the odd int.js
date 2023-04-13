// function findOdd(el) {
//   let even = 0
//   let odd = 0
//   for (i = 0; i < el.length; i++) {
//     if (el[i] % 2 === 0) {
//       even++
//     } else {
//       odd++
//     }
//   }
//   console.log(even, odd)
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))

function findOdd(el) {
  const count = el.reduce((acc, val) => {
    acc.set(val, (acc.get(val) || 0) + 1)
    console.log(acc)
    return acc
  }, new Map())
  return count
}

console.log(findOdd([1, 2, 3, 2, 1, 3, 1, 1, 2]))
