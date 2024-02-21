function filterString(value) {
  return parseInt(value.replace(/[a-zA-Z]/g, ""))
}

console.log(filterString("123")) //123
console.log(filterString("a1b2c3")) //123
console.log(filterString("aa1bb2cc3dd")) //123
