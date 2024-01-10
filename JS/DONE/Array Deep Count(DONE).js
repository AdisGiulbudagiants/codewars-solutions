function deepCount(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) count += deepCount(arr[i])
    count++
  }
  return count
}

console.log(deepCount([])) //0
console.log(deepCount([1, 2, 3])) //3
console.log(deepCount(["x", "y", ["z"]])) //4
console.log(deepCount([1, 2, [3, 4, [5]]])) //7
console.log(deepCount([[[[[[[[[]]]]]]]]])) //8
