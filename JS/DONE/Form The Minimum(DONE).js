function minValue(values) {
  return Number([...new Set(values)].sort().join(""))
}

console.log(minValue([1, 3, 1])) //13
console.log(minValue([4, 7, 5, 7])) //457
console.log(minValue([4, 8, 1, 4])) //148
console.log(minValue([5, 7, 9, 5, 7])) //579
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])) //356789
