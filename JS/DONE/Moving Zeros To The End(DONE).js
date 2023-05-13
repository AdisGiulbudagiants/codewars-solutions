function moveZeros(arr) {
  let result = []
  let zeroCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i])
    } else {
      zeroCount++
    }
  }

  while (zeroCount > 0) {
    result.push(0)
    zeroCount--
  }
  return result
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))
