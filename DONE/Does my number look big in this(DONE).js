function narcissistic(value) {
  const arr = value.toString().split("")
  const res = arr
    .map((el) => {
      return Math.pow(el, arr.length)
    })
    .reduce((acc, cur) => acc + cur, 0)
  return res == value ? true : false
}

console.log(narcissistic(7)) //true
console.log(narcissistic(153)) //true
console.log(narcissistic(122)) //false
console.log(narcissistic(487)) //false
