function points(games) {
  return games.reduce((totalPoints, match) => {
    const [ourScore, opponentScore] = match.split(":").map(Number)

    if (ourScore > opponentScore) {
      return totalPoints + 3
    } else if (ourScore === opponentScore) {
      return totalPoints + 1
    }
    return totalPoints
  }, 0)
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
) //30

console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
) //10

console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
) //0
