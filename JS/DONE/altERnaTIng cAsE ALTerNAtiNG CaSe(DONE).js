String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((el) => {
      return el == el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()
    })
    .join("")
}

console.log("hello world".toAlternatingCase()) //"HELLO WORLD"
console.log("HeLLo WoRLD".toAlternatingCase()) //"hEllO wOrld"
console.log("12345".toAlternatingCase()) //"12345"
console.log("1a2b3c4d5e".toAlternatingCase()) //"1A2B3C4D5E"
