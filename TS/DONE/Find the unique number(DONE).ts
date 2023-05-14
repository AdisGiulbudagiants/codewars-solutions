export function findUniq(arr: number[]): number {
  let uniqNum: number = 0
  for (const number of arr) {
    if (arr.indexOf(number) === arr.lastIndexOf(number)) {
      uniqNum = number
    }
  }
  return uniqNum
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))
console.log(findUniq([0, 0, 0.55, 0, 0]))
