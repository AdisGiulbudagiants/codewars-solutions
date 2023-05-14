export function countPositivesSumNegatives(input: any) {
  let pos = 0
  let sum = 0
  if (input == 0 || input == null) return []

  input.map((el: number) => {
    if (el > 0) {
      pos += 1
    }
    if (el < 0) {
      sum += el
    }
  })
  return [pos, sum]
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
)
