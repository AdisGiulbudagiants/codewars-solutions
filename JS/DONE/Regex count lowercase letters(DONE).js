function lowercaseCount(str) {
  let count = 0
  for (let char of str) if (/[a-z]/.test(char)) count++
  return count
}

console.log(lowercaseCount("abc")) //3
console.log(lowercaseCount("abcABC123")) //3
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")) //3
console.log(lowercaseCount("")) //0
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz")) //26
