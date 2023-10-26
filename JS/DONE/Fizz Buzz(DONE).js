function fizzbuzz(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
    result.push(i)
  }
  return result.map((el) => {
    if (el % 3 == 0) return (el = "Fizz")
    if (el % 5 == 0) return (el = "Buzz")
    if (el % 5 == 0 && el % 3 == 0) return (el = "FizzBuzz")

    return el
  })
}

console.log(fizzbuzz(3)) //[1, 2, "Fizz"]
console.log(fizzbuzz(10)) //[1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']
