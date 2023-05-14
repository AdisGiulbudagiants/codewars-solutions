function isDivisible(n: number, x: number, y: number): boolean {
  return n % x === 0 && n % y === 0 ? true : false
}

console.log(isDivisible(3, 3, 4)) //false
console.log(isDivisible(8, 3, 4)) //false
console.log(isDivisible(12, 3, 4)) //true
