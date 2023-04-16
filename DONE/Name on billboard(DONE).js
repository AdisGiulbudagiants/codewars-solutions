function billboard(name, price = 30) {
  const count = name.split("").join("").length
  let result = 0
  for (let i = 0; i < price; i++) {
    result += count
  }
  return result
}
console.log(billboard("Jeong-Ho Aristotelis", 20))
