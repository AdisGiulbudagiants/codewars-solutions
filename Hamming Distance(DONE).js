const hamming = (a, b) => {
  if (a.length !== b.length) {
    return 0
  }
  let dist = 0
  for (i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      dist += 1
    }
  }
  return dist
}

console.log(hamming("ararat giulbudagiants", "adis giulbudagiants"))
