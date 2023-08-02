function incrementString(strng) {
  const numberMatch = strng.match(/\d+$/)
  if (numberMatch) {
    const incrementedNumber = (parseInt(numberMatch[0], 10) + 1).toString()
    const numberOfZeros = numberMatch[0].length - incrementedNumber.length
    const paddedNumber =
      "0".repeat(Math.max(0, numberOfZeros)) + incrementedNumber
    return strng.slice(0, -numberMatch[0].length) + paddedNumber
  } else {
    return strng + "1"
  }
}

console.log(incrementString("foo")) //foo1
console.log(incrementString("foobar23")) //foobar24
console.log(incrementString("foo0042")) //foo0043
console.log(incrementString("1")) //'2'
console.log(incrementString("009")) //'010'
