function solution(str, end) {
  const arr1 = str.split("").slice(-end.length)
  const arr2 = end.split("")
  if (arr2 > arr1) return false
  if (arr1.every((val, index) => val === arr2[index]) || end === "") {
    return true
  }
  return false
}

console.log(solution("abc", ""))
console.log(solution("abc", "abcd"))
console.log(solution("abcde", "cde"))
console.log(solution("abcde", "abc"))
