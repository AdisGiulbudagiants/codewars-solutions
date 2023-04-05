const trim = (str, size) => {
  if (str.length <= size) {
    return str
  }
  if (size <= 3) {
    return str.slice(0, size) + "..."
  }
  if (size > 3) {
    return str.slice(0, size - 3) + "..."
  }
}

console.log(trim("My name is Adis Giulbudagiants", 3))
