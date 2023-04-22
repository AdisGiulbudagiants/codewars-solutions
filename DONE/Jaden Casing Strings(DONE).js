String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1)
    })
    .join(" ")
}

const test = "How can mirrors be real if our eyes aren't real"

console.log(test.toJadenCase())
