String.prototype.isUpperCase = function (str) {
  return this.valueOf() === this.valueOf().toUpperCase()
}
const test = "hello I AM DONALD"
console.log(test.toUpperCase() === test)
