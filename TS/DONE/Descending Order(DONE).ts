export function descendingOrder(n: number): number {
  const arr: number[] = n
    .toString()
    .split("")
    .map((el) => parseInt(el))

  const res = arr.sort((a, b) => b - a).join("")
  return parseInt(res)
}

console.log(descendingOrder(0))
console.log(descendingOrder(1))
console.log(descendingOrder(42145))
console.log(descendingOrder(145263))
