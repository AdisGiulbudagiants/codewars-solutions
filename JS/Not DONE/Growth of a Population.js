function nbYear(p0, percent, aug, p) {
  const percent2 = percent / 100
  let years = 0
  while (p0 < p) {
    p0 += Math.round(p0) * percent2 + aug
    years++
  }
  return years
}

console.log(nbYear(1500, 5, 100, 5000))
