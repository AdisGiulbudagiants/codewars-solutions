export function camelCase(str: string): string {
  let result: string[] = []
  str.split(" ").map((el) => {
    const first: string = el.charAt(0).toUpperCase()
    const second: string = el.slice(1).toLowerCase()
    const res: string = first + second
    result.push(res)
  })
  return result.join("")
}

console.log(camelCase("hello case")) //"HelloCase"
console.log(camelCase("camel case word"))
