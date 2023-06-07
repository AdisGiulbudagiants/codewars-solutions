var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0
  let dogYears = 0

  if (humanYears >= 1) {
    catYears += 15
    dogYears += 15
  }
  if (humanYears >= 2) {
    catYears += 9
    dogYears += 9
  }
  if (humanYears >= 3) {
    catYears += (humanYears - 2) * 4
    dogYears += (humanYears - 2) * 5
  }
  return [humanYears, catYears, dogYears]
}

console.log(humanYearsCatYearsDogYears(1)) //[1,15,15]
console.log(humanYearsCatYearsDogYears(2)) //[2,24,24]
console.log(humanYearsCatYearsDogYears(10)) //[10,56,64]
