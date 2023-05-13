function distinct(arr) {
  console.log(arr)
  const filter = arr.filter(
    (value, index, self) => self.indexOf(value) === index
  )
  return filter
}

console.log(distinct([1, 1, 2]))
