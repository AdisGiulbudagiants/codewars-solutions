export function wave(str: string): Array<string> {
  let res: string[] = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue
    const waveStr: string =
      str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
    res.push(waveStr)
  }
  return res
}

console.log(wave("hello")) // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("gap")) // [" Gap ", " gAp ", " gaP "]
console.log(wave("codewars")) // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
