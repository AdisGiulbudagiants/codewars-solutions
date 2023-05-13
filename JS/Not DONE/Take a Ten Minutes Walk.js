function isValidWalk(walk) {
  if (walk.length === 10) return true
  return false
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]))
