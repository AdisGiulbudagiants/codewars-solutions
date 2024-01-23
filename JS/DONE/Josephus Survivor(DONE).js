function josephusSurvivor(n, k) {
  let result = 0
  for (let i = 2; i <= n; i++) {
    result = (result + k) % i
  }
  return result + 1
}

console.log(josephusSurvivor(7, 3)) //4
console.log(josephusSurvivor(11, 19)) //10
console.log(josephusSurvivor(1, 300)) //1
console.log(josephusSurvivor(14, 2)) //13
console.log(josephusSurvivor(100, 1)) //100
