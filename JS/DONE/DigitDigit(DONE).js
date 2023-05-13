function squareDigits(num) {
  const res = num
    .toString()
    .split("")
    .map((el) => el ** 2)
    .join("")

  return parseInt(res)
}

console.log(squareDigits(3212))
