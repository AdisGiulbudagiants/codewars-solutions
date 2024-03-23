function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5
}

console.log(cookingTime(0)) //0
console.log(cookingTime(5)) //5
console.log(cookingTime(9)) //10
console.log(cookingTime(10)) //10
console.log(cookingTime(408)) //255
console.log(cookingTime(87565)) //54730
