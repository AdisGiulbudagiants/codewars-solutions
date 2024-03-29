function isIntArray(arr) {
  return (
    Array.isArray(arr) &&
    arr.every(
      (num) =>
        Number.isInteger(num) ||
        (typeof num === "number" && !Number.isNaN(num) && num % 1 === 0)
    )
  )
}

console.log(isIntArray([])) //true
console.log(isIntArray([1, 2, 3, 4])) //true
console.log(isIntArray([1, 2, 3, NaN])) //false
