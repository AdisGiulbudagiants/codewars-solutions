function cleanString(s) {
  const result = []
  for (const char of s) {
    char === "#" ? result.pop() : result.push(char)
  }
  return result.join("")
}

console.log(cleanString("abc#d##c"))
