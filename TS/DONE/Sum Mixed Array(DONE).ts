export function sumMix(x: any[]): number {
  let result: number[] = []
  x.map((el) => {
    typeof el === "string" ? result.push(parseInt(el)) : result.push(el)
  })
  return result.reduce((acc, cur) => acc + cur)
}

console.log(sumMix([9, 3, "7", "3"]))
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]))
