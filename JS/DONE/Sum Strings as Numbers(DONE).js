function sumStrings(a, b) {
  const res = BigInt(a) + BigInt(b)
  return res.toString()
}

console.log(sumStrings("123", "456")) //'579'
console.log(sumStrings("712569312664357328695151392", "8100824045303269669937")) //'712577413488402631964821329'
