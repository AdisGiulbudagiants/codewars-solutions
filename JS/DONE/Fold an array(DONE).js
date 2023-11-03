function foldArray(array, runs) {
  let result = array

  for (let i = 0; i < runs; i++) {
    const halfway = Math.floor(result.length / 2)
    for (let j = 0; j < halfway; j++) {
      result[j] += result.pop()
    }
  }
  return result
}

console.log(foldArray([1, 2, 3, 4, 5], 1)) //[6,6,3]
console.log(foldArray([1, 2, 3, 4, 5], 2)) //[ 9, 6 ]
console.log(foldArray([1, 2, 3, 4, 5], 3)) //[ 15 ]
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1)) //[ 14, 75, 0 ]
