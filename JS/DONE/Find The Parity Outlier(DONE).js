function findOutlier(int) {
  const even = int.filter((num) => num % 2 === 0)
  const odd = int.filter((num) => num % 2 !== 0)
  const res = int
    .map((el) => {
      if (el == even || el == odd) {
        return el
      }
    })
    .join("")
  return parseInt(res)
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
