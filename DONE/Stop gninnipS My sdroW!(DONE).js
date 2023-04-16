function spinWords(string) {
  const split = string.split(" ")
  for (i = 0; i < split.length; i++) {
    if (split[i].length >= 5) {
      split[i] = split[i].split("").reverse().join("")
    }
  }
  return split.join(" ")
}

console.log(spinWords("This is another test"))
