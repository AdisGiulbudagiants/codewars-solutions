export function oddOrEven(array: number[]) {
  return array.reduce((acc, cur) => acc + cur, 0) % 2 == 0 ? "even" : "odd"
}

console.log(oddOrEven([0]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0, 1, 4]))
console.log(oddOrEven([0, -1, -5]))
