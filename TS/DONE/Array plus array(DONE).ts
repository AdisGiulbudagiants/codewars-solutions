export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const one = arr1.reduce((acc, cur) => acc + cur)
  const two = arr2.reduce((acc, cur) => acc + cur)
  return one + two
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) //21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) //-21
