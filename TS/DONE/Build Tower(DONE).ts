export const towerBuilder = (nFloors: number): string[] => {
  let res: string[] = []
  for (let i = 1; i <= nFloors; i++) {
    const space = " "
    const star = "*"
    const spaces = space.repeat(nFloors - i)
    const stars = star.repeat(i * 2 - 1)
    res.push(`${spaces}${stars}${spaces}`)
  }
  return res
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))
console.log(towerBuilder(4))
console.log(towerBuilder(5))
console.log(towerBuilder(6))
