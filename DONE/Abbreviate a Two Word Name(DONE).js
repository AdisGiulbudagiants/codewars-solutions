function abbrevName(name) {
  const res =
    name.split(" ")[0].toString()[0].toUpperCase() +
    "." +
    name.split(" ")[1].toString()[0].toUpperCase()
  return res
}

console.log(abbrevName("sam harris"))
