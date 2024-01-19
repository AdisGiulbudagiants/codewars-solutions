function isPythagoreanTriple(integers) {
  const sortedInt = integers.sort((a, b) => a - b)
  return sortedInt[0] ** 2 + sortedInt[1] ** 2 === sortedInt[2] ** 2
    ? true
    : false
}

console.log(isPythagoreanTriple([5, 3, 4])) //true
console.log(isPythagoreanTriple([3, 4, 5])) //true
console.log(isPythagoreanTriple([13, 12, 5])) //true
console.log(isPythagoreanTriple([100, 3, 999])) //false
console.log(isPythagoreanTriple([3, 5, 9])) //false
