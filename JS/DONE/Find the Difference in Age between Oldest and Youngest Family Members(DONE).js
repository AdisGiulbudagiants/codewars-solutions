function differenceInAges(ages) {
  const oldest = Math.max(...ages)
  const youngest = Math.min(...ages)
  return [youngest, oldest, oldest - youngest]
}

console.log(differenceInAges([82, 15, 6, 38, 35])) //[6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) //[14, 99, 85]
