const largest = (n, array) => {
  return array
    .sort((a, b) => {
      return a - b
    })
    .slice(array.length - n)
}

console.log(largest(2, [10, 9, 7, 6, 5, 2, 1]))
