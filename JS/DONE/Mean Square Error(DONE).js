var solution = function (firstArray, secondArray) {
  let res = []
  for (let i = 0; i < firstArray.length; i++) {
    res.push(secondArray[i] - firstArray[i])
  }
  return (
    res.map((num) => num ** 2).reduce((acc, cur) => acc + cur, 0) / res.length
  )
}

console.log(solution([1, 2, 3], [4, 5, 6])) //9
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])) //16.5
console.log(solution([-1, 0], [0, -1])) //1
