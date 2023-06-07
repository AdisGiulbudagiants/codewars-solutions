function expandedForm(num) {
  return String(num)
    .split("")
    .map(
      (digit, index, array) => digit * Math.pow(10, array.length - index - 1)
    )
    .filter((el) => el !== 0)
    .join(" + ")
}

console.log(expandedForm(12)) //'10 + 2'
console.log(expandedForm(42)) //'40 + 2'
console.log(expandedForm(70304)) //'70000 + 300 + 4'
