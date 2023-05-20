export const min = (list: number[]): number => {
  return list.sort((a, b) => a - b)[0]
}

export const max = (list: number[]): number => {
  return list.sort((a, b) => b - a)[0]
}

console.log(min([4, 6, 2, 1, 9, 63, -134, 566])) //-134
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])) //566
