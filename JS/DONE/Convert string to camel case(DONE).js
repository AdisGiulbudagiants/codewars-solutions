function toCamelCase(str) {
  const words = str.split(/[_-]/)
  const other = words
    .slice(1)
    .map((el) => {
      return el.charAt(0).toUpperCase() + el.slice(1)
    })
    .join("")
  return words[0] + other
}

console.log(toCamelCase("the_stealth_warrior"))
