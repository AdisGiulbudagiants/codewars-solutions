function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  )
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")) //false
console.log(checkCoupon("123", "123", "September 5, 2014", "October 1, 2014")) //true
console.log(checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014")) //false
