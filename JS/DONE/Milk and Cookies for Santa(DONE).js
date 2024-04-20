function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() === 11
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))) //true
console.log(timeForMilkAndCookies(new Date(2013, 10, 24))) //false
