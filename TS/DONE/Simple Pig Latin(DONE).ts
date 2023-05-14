export const pigIt = (a: string): string => {
  const arr = a.split(" ")
  const res = arr
    .map((el) => {
      if (/^[a-zA-Z]+$/.test(el)) {
        const res: string = el.replace(el[0], "")
        const rever: string = `${res}${el[0]}ay`
        return rever
      } else {
        return el
      }
    })
    .join(" ")
  return res
}

console.log(pigIt("Pig latin is cool"))
console.log(pigIt("This is my string"))
console.log(pigIt("Hello world !"))
