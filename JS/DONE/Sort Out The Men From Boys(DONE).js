function menFromBoys(arr) {
  let odd = arr.filter((num) => num % 2 !== 0).sort((a, b) => b - a)
  let even = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b)
  return Array.from(new Set(even)).concat(Array.from(new Set(odd)))
}

console.log(menFromBoys([7, 3, 14, 17])) //[14,17,7,3]
console.log(menFromBoys([2, 43, 95, 90, 37])) //[2,90,95,43,37]
