export const high = (str: string): string => {
  const wordArray = str.split(" ")
  let highestScore = 0
  let highestScoringWord = ""

  for (const word of wordArray) {
    let score = 0
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96
    }

    if (score > highestScore) {
      highestScore = score
      highestScoringWord = word
    }
  }
  return highestScoringWord
}

console.log(high("man i need a taxi up to ubud")) //taxi
console.log(high("what time are we climbing up the volcano")) //volcano
console.log(high("b aa")) //b
console.log(high("bb d")) //bb
