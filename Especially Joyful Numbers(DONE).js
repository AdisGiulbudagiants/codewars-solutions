function numberJoy(n) {
  const sum = n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0)

  const reverse = sum.toString().split("").reverse("").join("")

  if (sum * reverse === n) {
    return true
  }
  return false
}

console.log(numberJoy(1997))
