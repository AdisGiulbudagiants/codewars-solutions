function rowWeights(array) {
  let team1 = []
  let team2 = []

  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? team1.push(array[i]) : team2.push(array[i])
  }

  if (team1.length < 1) {
    team1.push(0)
  }
  if (team2.length < 1) {
    team2.push(0)
  }

  const sumOfTeam1 = team1.reduce((acc, cur) => acc + cur)
  const sumOfTeam2 = team2.reduce((acc, cur) => acc + cur)

  return [sumOfTeam1, sumOfTeam2]
}

console.log(rowWeights([80])) //[80,0]
console.log(rowWeights([100, 50])) //[100,50]
console.log(rowWeights([50, 60, 70, 80])) //[120,140]
