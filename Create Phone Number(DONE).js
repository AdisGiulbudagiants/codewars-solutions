function createPhoneNumber(numbers) {
  const slice1 = `(${numbers.slice(0, 3).join("")})`
  const slice2 = numbers.slice(3, 6).join("")
  const slice3 = numbers.slice(6, 10).join("")
  const res = `${slice1} ${slice2}-${slice3}`
  return res
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
