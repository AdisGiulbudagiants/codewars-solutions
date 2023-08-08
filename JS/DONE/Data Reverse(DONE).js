function dataReverse(data) {
  const result = []
  for (let i = 0; i < data.length; i += 8) {
    const group = data.slice(i, i + 8).join("")
    result.push(group)
  }

  return result
    .reverse()
    .join("")
    .split("")
    .map((el) => {
      return parseInt(el)
    })
}

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
) //[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

// [("11111111", "00000000", " 00001111", "10101010")]
