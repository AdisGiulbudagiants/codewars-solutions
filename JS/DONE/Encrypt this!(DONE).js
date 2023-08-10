var encryptThis = function (text) {
  return text
    .split(" ")
    .map((word) => {
      const asciiCode = word.charCodeAt(0)
      if (word.length === 1) return asciiCode.toString()

      const charArray = word.split("")
      ;[charArray[1], charArray[charArray.length - 1]] = [
        charArray[charArray.length - 1],
        charArray[1],
      ]
      return `${asciiCode}${charArray.slice(1).join("")}`
    })
    .join(" ")
}

console.log(encryptThis("A")) //'65'
console.log(encryptThis("A wise old owl lived in an oak")) //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke")) //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
