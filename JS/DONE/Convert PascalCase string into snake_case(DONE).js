function toUnderscore(string) {
  if (typeof string === "number") return string.toString()
  return string
    .split(/(?=[A-Z])/)
    .map((el) => el.toLowerCase())
    .join("_")
}

console.log(toUnderscore("TestController")) //"test_controller"
console.log(toUnderscore("MoviesAndBooks")) //"movies_and_books"
console.log(toUnderscore("App7Test")) //"app7_test"
console.log(toUnderscore(1)) //"1"
