function towerBuilder(nFloors) {
  const result = []
  for (let i = 1; i <= nFloors; i++) {
    const space = " "
    const star = "*"
    const spaces = space.repeat(nFloors - i)
    const stars = star.repeat(i * 2 - 1)
    result.push(`${spaces}${stars}${spaces}`)
  }
  return result
}

console.log(towerBuilder(1)) //["*"]
console.log(towerBuilder(2)) //["*","***"]
console.log(towerBuilder(3)) //["*","***","*****"]
