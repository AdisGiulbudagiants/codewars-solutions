export function countSheep(num: number): string {
  if (num == 0) return ""
  let res: string = ""
  for (let i = 1; i <= num; i++) {
    res += `${i} sheep...`
  }
  return res
}

console.log(countSheep(0))
console.log(countSheep(1))
console.log(countSheep(2))
console.log(countSheep(3))
