function vowelOne(s) {
  return s.replace(/[^aeoiu]/gi, "0").replace(/[aeoiu]/gi, "1")
}

console.log(vowelOne("vowelOne")) //'01010101'
console.log(vowelOne("123, arou")) //'000001011'
