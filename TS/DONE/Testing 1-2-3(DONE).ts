export function number(array: string[]): string[] {
  let result: string[] = []
  for (let i = 1; i <= array.length; i++) {
    array.map((el) => result.push(`${i++}: ${el}`))
  }
  return result
}

console.log(number(["a", "b", "c"])) //["1: a", "2: b", "3: c"]
console.log(number(["", "", "", "", ""])) //["1: ", "2: ", "3: ", "4: ", "5: "]
