const cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false
  }

  if (Math.cbrt(volume) === side) {
    return true
  }
  return false
}
