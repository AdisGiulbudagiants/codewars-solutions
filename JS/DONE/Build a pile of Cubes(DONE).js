function findNb(m) {
  let n = 0
  let sum = 0
  while (sum < m) {
    n++
    sum += n ** 3
  }
  return sum === m ? n : -1
}

console.log(findNb(1071225)) //45
console.log(findNb(91716553919377)) //-1
console.log(findNb(4183059834009)) //2022
console.log(findNb(24723578342962)) //-1
