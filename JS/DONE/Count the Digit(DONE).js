function nbDig(n, d) {
  let count = 0
  for (let i = 0; i <= n; i++) {
    const sqrStr = (i ** 2).toString()

    for (let i = 0; i < sqrStr.length; i++) {
      if (sqrStr[i] === d.toString()) {
        count++
      }
    }
  }
  return count
}

console.log(nbDig(10, 1)) //4
console.log(nbDig(25, 1)) //11
console.log(nbDig(5750, 0)) //4700
console.log(nbDig(13303, 6)) //12135
