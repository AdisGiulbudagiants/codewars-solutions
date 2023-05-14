export function invert(array: number[]): number[] {
  const res: number[] = array.map((el) => {
    return el * -1
  })
  return res
}

console.log(invert([1, 2, 3, 4, 5]))
console.log(invert([1, -2, 3, -4, 5]))
