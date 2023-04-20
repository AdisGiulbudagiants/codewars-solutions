function findShort(str) {
  const arr = str.split(" ").map((el) => el.length)
  return Math.min(...arr)
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
