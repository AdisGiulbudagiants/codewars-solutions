function multiply(number) {
  return number * 5 ** number.toString().replace(/[-.,]/g, "").length
}

console.log(multiply(3)) //15
console.log(multiply(10)) //250
console.log(multiply(200)) //25000
console.log(multiply(0)) //0
console.log(multiply(-3)) //-15
