function comp(array1, array2) {
  if (array1 === null || array2 === null) return false
  const sqrtArr2 = array2.map((el) => Math.sqrt(el)).sort((a, b) => a - b)
  return (
    JSON.stringify(array1.sort((a, b) => a - b)) === JSON.stringify(sqrtArr2)
  )
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
) //true

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
) //false
