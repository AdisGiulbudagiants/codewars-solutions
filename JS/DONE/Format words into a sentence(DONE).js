function formatWords(words) {
  if (!words || !words.length) return ""

  const filteredWords = words.filter(Boolean) // Удалить пустые элементы
  const lastWord = filteredWords.pop()

  return filteredWords.length
    ? filteredWords.join(", ") + " and " + lastWord
    : lastWord || ""
}

console.log(formatWords(["one", "two", "three", "four"])) //'one, two, three and four'
console.log(formatWords(["one"])) //'one'
console.log(formatWords(["one", "", "three"])) //'one and three'
console.log(formatWords(["", "", "three"])) //'three'
console.log(formatWords(["one", "two", ""])) //'one and two'
