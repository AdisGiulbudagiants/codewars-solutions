var uniqueInOrder = function (iterable) {
  //OPTION 1
  //return [...iterable].filter((a, i) => a !== iterable[i - 1])

  //OPTION 2
  if (typeof iterable === "string") iterable = iterable.split("")
  let result = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      result.push(iterable[i])
    }
  }
  return result
}

console.log(uniqueInOrder("AAAABBBCCDAABBB")) //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder("ABBCcAD")) //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) //[1,2,3]
