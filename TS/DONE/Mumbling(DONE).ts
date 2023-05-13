export function accum(s: string): string {
  let res = ""
  for (let i = 0; i < s.length; i++) {
    res += s[i].toUpperCase()
    res += s[i].toLowerCase().repeat(i)
    if (i < s.length - 1) {
      res += "-"
    }
  }
  return res
}

console.log(accum("abcd"))
console.log(accum("ZpglnRxqenU"))
