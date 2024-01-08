function isSortedAndHow(array) {
  let ascending = true
  let descending = true
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) ascending = false
    if (array[i] < array[i + 1]) descending = false
  }
  if (ascending) {
    return "yes, ascending"
  } else if (descending) {
    return "yes, descending"
  } else {
    return "no"
  }
}

console.log(isSortedAndHow([1, 2])) //'yes, ascending'
console.log(isSortedAndHow([15, 7, 3, -8])) //'yes, descending'
console.log(isSortedAndHow([4, 2, 30])) //'no'
