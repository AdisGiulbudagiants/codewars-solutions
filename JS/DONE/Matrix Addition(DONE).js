function matrixAddition(a, b) {
  let result = []
  for (let i = 0; i < a.length; i++) {
    let row = []
    for (let j = 0; j < a[i].length; j++) row.push(a[i][j] + b[i][j])
    result.push(row)
  }
  return result
}

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
) /**
[ [3, 4, 4],
[6, 4, 4],
[2, 2, 4] ] */
