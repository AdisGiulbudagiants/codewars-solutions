function multipleOfIndex(array) {
  const res = array.filter((el, index) => el % index == 0)
  if (array[0] == 0) res.unshift(0)

  return res
}

console.log(multipleOfIndex([0, 2, 3, 6, 9])) //[ +0, 2, 6 ]
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25])) //[-6, 32, 25]
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10])) //[-1, 10]
console.log(
  multipleOfIndex([
    -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92,
    68,
  ])
) //[-85, 72, 0, 68]
