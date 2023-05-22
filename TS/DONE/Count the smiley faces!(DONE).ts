export function countSmileys(arr: string[]) {
  let res = 0
  const validCharacters = /^(:|;)(-|~)?(\)|D)$/

  for (const smiley of arr) {
    if (validCharacters.test(smiley)) {
      res++
    }
  }
  return res
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]))
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]))
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]))
