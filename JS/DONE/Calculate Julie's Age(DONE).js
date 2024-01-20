function age(x, y) {
  const brotherAge = Math.round(x / (y - 1))
  return brotherAge + x
}

console.log(age(6, 3)) //9
console.log(age(-15, 0.25)) //5
