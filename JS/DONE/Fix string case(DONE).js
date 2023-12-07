function solve(s) {
  let lowerCase = 0
  let upperCase = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) lowerCase++
    if (s[i] === s[i].toUpperCase()) upperCase++
  }
  return lowerCase > upperCase || lowerCase === upperCase
    ? s.toLowerCase()
    : s.toUpperCase()
}

console.log(solve("code")) //code
console.log(solve("CODe")) //CODE
console.log(solve("Code")) //code
console.log(solve("COde")) //code
