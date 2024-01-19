function modifiedSum(a, n) {
  return a.reduce((acc, cur) => acc + cur ** n - cur, 0)
}

console.log(modifiedSum([1, 2, 3], 3)) //30
console.log(modifiedSum([1, 2], 5)) //30
