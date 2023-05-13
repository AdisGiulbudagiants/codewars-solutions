export function getMiddle(s: string) {
  const odd = Math.floor(s.length / 2)
  const even = s.length / 2
  return s.length % 2 === 0 ? s[even - 1] + s[even] : s[odd]
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))
