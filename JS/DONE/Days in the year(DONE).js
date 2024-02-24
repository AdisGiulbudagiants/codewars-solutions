function yearDays(year) {
  const daysInTheYear =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 366 : 365
  return `${year} has ${daysInTheYear} days`
}

console.log(yearDays(2000)) //"2000 has 366 days"
console.log(yearDays(0)) //"0 has 366 days"
console.log(yearDays(-64)) //"-64 has 366 days"
console.log(yearDays(2016)) //"2016 has 366 days"
console.log(yearDays(1974)) //"1974 has 365 days"
console.log(yearDays(-10)) //"-10 has 365 days"
