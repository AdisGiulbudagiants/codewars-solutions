function whatday(num) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  return num > 7 || num < 1
    ? "Wrong, please enter a number between 1 and 7"
    : days[num - 1]
}

console.log(whatday(1)) //Sunday
console.log(whatday(2)) //Monday
console.log(whatday(3)) //Tuesday
console.log(whatday(4)) //Wednesday
console.log(whatday(5)) //Thursday
console.log(whatday(6)) //Friday
console.log(whatday(7)) //Saturday
console.log(whatday(8)) //'Wrong, please enter a number between 1 and 7'
console.log(whatday(20)) //'Wrong, please enter a number between 1 and 7'
