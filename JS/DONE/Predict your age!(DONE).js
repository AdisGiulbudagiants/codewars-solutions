function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const res = [age1, age2, age3, age4, age5, age6, age7, age8]
    .map((el) => {
      return el * el
    })
    .reduce((acc, cur) => acc + cur)
  return Math.floor(Math.sqrt(res) / 2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45)) //86
