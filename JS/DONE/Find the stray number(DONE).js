function stray(numbers) {
  let res = 0
  for (let i = 0; i < numbers.length; i++) {
    res ^= numbers[i]
  }
  return res
}

console.log(stray([1, 1, 2])) //2
console.log(stray([17, 17, 3, 17, 17, 17, 17])) //3
console.log(stray([2, 1, 1])) //2
