function solution(str) {
  let newArr = []
  const res = str.split("")
  for (let i = 0; i < res.length; i += 2) {
    if (i + 1 < res.length) {
      newArr.push(res[i] + res[i + 1])
    } else {
      newArr.push(res[i] + "_")
    }
  }
  return newArr
}

console.log(solution("abc"))
console.log(solution("abcdef"))
console.log(solution("abcdefg"))
