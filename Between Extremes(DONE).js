function betweenExtremes(numbers) {
  const max = numbers.reduce((max, current) => (max > current ? max : current))
  const min = numbers.reduce((min, current) => (min < current ? min : current))

  return max - min
}
console.log(betweenExtremes([1, 2, 8, 10, 100]))
