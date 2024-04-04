function autocomplete(input, dictionary) {
  input = input.replace(/[^a-zA-Z]/g, "")
  const matches = dictionary.filter((el) =>
    el.toLowerCase().startsWith(input.toLowerCase())
  )
  return matches.slice(0, 5)
}

console.log(autocomplete("ai", ["airplane", "airport", "apple", "ball"])) //['airplane','airport']
