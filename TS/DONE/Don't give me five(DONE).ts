export function dontGiveMeFive(start: number, end: number): number {
  let res: number[] = []
  for (let i = start; i <= end; i++) {
    res.push(i)
  }
  const result = res.filter((el) => {
    return !el.toString().includes("5")
  })
  return result.length
}

console.log(dontGiveMeFive(1, 9)) //8
console.log(dontGiveMeFive(4, 17)) //12
