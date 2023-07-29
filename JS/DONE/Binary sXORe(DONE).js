const sxore = function (n) {
  if (n % 4 === 0) return n
  if (n % 4 === 1) return 1
  if (n % 4 === 2) return n + 1
  if (n % 4 === 3) return 0
}

console.log(sxore(0)) //0
console.log(sxore(1)) //1
console.log(sxore(50)) //51
console.log(sxore(1000000)) //1000000
