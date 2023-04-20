function filter_list(arr) {
  return arr.filter((n) => typeof n === "number")
}

console.log(filter_list([1, "a", "b", 0, 15]))
