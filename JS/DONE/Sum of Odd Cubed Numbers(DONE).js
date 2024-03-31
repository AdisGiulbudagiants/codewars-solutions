function cubeOdd(arr) {
  return arr.some(isNaN)
    ? undefined
    : arr.filter((num) => num % 2 !== 0).reduce((acc, cur) => acc + cur ** 3, 0)
}

console.log(cubeOdd([1, 2, 3, 4])) //28
console.log(cubeOdd([-3, -2, 2, 3])) //0
console.log(cubeOdd(["a", 12, 9, "z", 42])) //undefined
