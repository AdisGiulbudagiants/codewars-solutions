function firstNonConsecutive(arr) {
  let nonCon = null
  arr.forEach((num, index) => {
    if (index > 0 && num !== arr[index - 1] + 1 && nonCon === null) {
      nonCon = num
    }
  })
  return nonCon
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 7, 8]))
