function wordsToMarks(string) {
  let sum = 0
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i) - 96
    if (charCode >= 1 && charCode <= 26) {
      sum += charCode
    }
  }
  return sum
}

console.log(wordsToMarks("love")) //54
console.log(wordsToMarks("attitude")) //100
console.log(wordsToMarks("friends")) //75
console.log(wordsToMarks("family")) //66
