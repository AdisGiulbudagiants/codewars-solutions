function sumConsecutives(s) {
  return s.reduce(
    (acc, cur, index) =>
      cur === s[index - 1]
        ? acc.slice(0, -1).concat(acc[acc.length - 1] + cur)
        : acc.concat(cur),
    []
  )
}

console.log(sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1])) //[1,12,0,4,6,1]
console.log(sumConsecutives([1, 1, 7, 7, 3])) //[2,14,3]
console.log(sumConsecutives([-5, -5, 7, 7, 12, 0])) //[-10,14,12,0]
console.log(sumConsecutives([3, 3, 3, 3, 1])) //[12,1]
