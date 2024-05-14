function shorterReverseLonger(a, b) {
  return b.length < a.length || b.length == a.length
    ? b + a.split("").reverse().join("") + b
    : a + b.split("").reverse().join("") + a
}

console.log(shorterReverseLonger("first", "abcde")) //abcdetsrifabcde
console.log(shorterReverseLonger("hello", "bau")) //bauollehbau
console.log(shorterReverseLonger("fghi", "abcde")) //fghiedcbafghi
