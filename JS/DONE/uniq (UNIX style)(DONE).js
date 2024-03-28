function uniq(a) {
  return a.filter((el, index) => index === a.length - 1 || el !== a[index + 1])
}

console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c", "c"])) //['a','b','c','a','b','c']
console.log(uniq(["a", "a", "b", "b", "c", "a", "b", "c"])) //['a','b','c','a','b','c']
