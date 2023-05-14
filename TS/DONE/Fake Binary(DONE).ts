export const fakeBin = (x: string): string => {
  let result: string = ""
  x.split("").map((el) => {
    if (Number(el) < 5) {
      result += 0
    }
    if (Number(el) >= 5) {
      result += 1
    }
  })
  return result
}

console.log(fakeBin("45385593107843568"))
console.log(fakeBin("509321967506747"))
console.log(fakeBin("366058562030849490134388085"))
