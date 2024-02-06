function uniqueSum(lst) {
  return [...new Set(lst)].reduce((acc, cur) => acc + cur, null)
}

console.log(uniqueSum([1, 2, 3])) //6
console.log(uniqueSum([1, 3, 8, 1, 8])) //12
console.log(uniqueSum([-1, -1, 5, 2, -7])) //-1
console.log(uniqueSum([])) //null
