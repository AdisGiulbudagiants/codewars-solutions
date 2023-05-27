export function sumArray(array: number[] | null): number {
  if (array === null || array.length == 0 || array.length == 1) return 0
  const res = array
    .sort((a, b) => a - b)
    .slice(1, array.length - 1)
    .reduce((acc, cur) => acc + cur, 0)
  return res
}

console.log(sumArray([1])) //0
console.log(sumArray([])) //0
console.log(sumArray([6, 2, 1, 8, 10])) //16
console.log(sumArray([6, 0, 1, 10, 10])) //17
