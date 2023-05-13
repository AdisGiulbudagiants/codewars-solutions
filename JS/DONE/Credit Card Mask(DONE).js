function maskify(cc) {
  if (cc.length <= 4) return cc
  const res = "#".repeat(cc.length - 4) + cc.slice(-4)
  return res
}

console.log(maskify("4556364607935616"))
console.log(maskify("6"))
