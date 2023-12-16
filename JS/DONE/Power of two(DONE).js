function isPowerOfTwo(n) {
  if (n <= 0) return false
  return (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(234)) //false
console.log(isPowerOfTwo(0)) //false
console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(4096)) //true
console.log(isPowerOfTwo(5)) //false
