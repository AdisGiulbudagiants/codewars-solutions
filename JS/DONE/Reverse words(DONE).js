function reverseWords(str) {
  const arr = str.split(" ").reverse("")
  const res = arr.map((el) => {
    return el.split("").reverse("").join("")
  })
  return res.reverse(" ").join(" ")
}

console.log(reverseWords("This is an example!"))
