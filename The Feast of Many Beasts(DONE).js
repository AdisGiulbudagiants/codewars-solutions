function feast(beast, dish) {
  const split = beast.split("")
  const split2 = dish.split("")
  return split[0] == split2[0] &&
    split[split.length - 1] == split2[split2.length - 1]
    ? true
    : false
}

console.log(feast("great blue heron", "garlic naan"))
