function remove(string) {
  const res = string.split("")
  if (res[res.length - 1] === "!") {
    res.pop()
  }
  return res.join("")
}

console.log(remove("Hi!")) //"Hi"
console.log(remove("Hi!!!")) //"Hi!!"
console.log(remove("!Hi")) //"!Hi"
console.log(remove("Hi! Hi!")) //"Hi! Hi"
