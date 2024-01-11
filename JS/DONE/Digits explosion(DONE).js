function explode(s) {
  let result = ""
  for (let char of s) result += char.repeat(Number(char))
  return result
}

console.log(explode("312")) //'333122'
console.log(explode("102269")) //'12222666666999999999'
console.log(explode("0")) //''
console.log(explode("000")) //''
console.log(explode("123")) //'122333'
