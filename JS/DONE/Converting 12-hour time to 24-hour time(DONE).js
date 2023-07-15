function to24hourtime(hour, minute, period) {
  if (period === "pm" && hour !== 12) {
    hour += 12
  } else if (period === "am" && hour === 12) {
    hour = 0
  }
  hour = hour.toString().padStart(2, "0")
  minute = minute.toString().padStart(2, "0")
  return hour + minute
}

console.log(to24hourtime(1, 0, "am")) //"0100"
console.log(to24hourtime(1, 0, "pm")) //"1300"
console.log(to24hourtime(12, 0, "am")) //"0000"
console.log(to24hourtime(12, 0, "pm")) //"1200"
console.log(to24hourtime(6, 30, "am")) //"0630"
console.log(to24hourtime(9, 45, "pm")) //"2145"
