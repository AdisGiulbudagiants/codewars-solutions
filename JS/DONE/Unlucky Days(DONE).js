function unluckyDays(year) {
  return Array.from(
    { length: 12 },
    (_, month) => new Date(year, month, 13).getDay() === 5
  ).filter(Boolean).length
}

console.log(unluckyDays(2015)) //3
console.log(unluckyDays(1001)) //3
console.log(unluckyDays(1986)) //1
console.log(unluckyDays(1586)) //1
