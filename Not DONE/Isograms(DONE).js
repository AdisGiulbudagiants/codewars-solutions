function isIsogram(str) {
  let result = {}
  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase()
    if (result[letter]) {
      return false
    } else {
      result[letter] = 1
    }
  }
  return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("aba"))
