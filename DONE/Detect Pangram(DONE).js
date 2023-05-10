function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  string = string.toLowerCase()
  for (let i = 0; i < alphabet.length; i++) {
    if (string.indexOf(alphabet[i]) === -1) {
      return false
    }
  }
  return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog .")) //true
console.log(isPangram("This is not a pangram.")) //false
