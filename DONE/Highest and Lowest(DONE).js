function highAndLow(numbers) {
  const split = numbers.split(" ")
  const max = Math.max(...split)
  const min = Math.min(...split)
  return `${max} ${min}`
}

console.log(highAndLow("1 2 -3 4 5"))
