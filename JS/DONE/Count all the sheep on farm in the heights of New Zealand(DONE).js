function lostSheep(friday, saturday, total) {
  const fridaySum = friday.reduce((acc, cur) => acc + cur, 0)
  const saturdaySum = saturday.reduce((acc, cur) => acc + cur, 0)
  return total - (fridaySum + saturdaySum)
}

console.log(lostSheep([1, 2], [3, 4], 15)) //5
console.log(lostSheep([3, 1, 2], [4, 5], 21)) //6
console.log(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300)) //178
