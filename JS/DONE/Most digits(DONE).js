function findLongest(array) {
  return array.reduce((acc, cur) =>
    String(cur).length > String(acc).length ? cur : acc
  )
}

console.log(findLongest([1, 10, 100])) //100
console.log(findLongest([9000, 8, 800])) //9000
console.log(findLongest([8, 900, 500])) //900
