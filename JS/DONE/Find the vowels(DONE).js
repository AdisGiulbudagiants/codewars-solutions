function vowelIndices(word) {
  return word.split("").flatMap((el, index) => {
    return "aeoiuy".includes(el.toLowerCase()) ? [index + 1] : []
  })
}

console.log(vowelIndices("Mmmm")) //[]
console.log(vowelIndices("Super")) //[2,4]
console.log(vowelIndices("Apple")) //[1,5]
console.log(vowelIndices("YoMama")) //[1,2,4,6]
