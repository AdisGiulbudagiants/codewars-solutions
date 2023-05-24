export function inArray(a1: string[], a2: string[]): string[] {
  let res: string[] = []
  const str = a2.join(" ")
  a1.map((el) => {
    if (str.indexOf(el) !== -1) {
      res.push(el)
    }
  })
  return res.sort()
}

let a1 = ["arp", "live", "strong"]
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2)) // ["arp", "live", "strong"]

let b1 = ["tarp", "mice", "bull"]
console.log(inArray(b1, a2)) // []
