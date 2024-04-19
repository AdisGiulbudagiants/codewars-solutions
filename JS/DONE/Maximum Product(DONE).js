function adjacentElementsProduct(array) {
  return array.reduce((max, num, i) => {
    if (i === 0) return max
    const product = num * array[i - 1]
    return Math.max(max, product)
  }, -Infinity)
}

console.log(adjacentElementsProduct([5, 8])) //40
console.log(adjacentElementsProduct([1, 2, 3])) //6
console.log(adjacentElementsProduct([1, 5, 10, 9])) //90
console.log(adjacentElementsProduct([4, 12, 3, 1, 5])) //48
