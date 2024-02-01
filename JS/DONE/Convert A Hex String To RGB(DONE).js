function hexStringToRGB(hexString) {
  const rgb = hexString
    .replace("#", "")
    .match(/.{1,2}/g)
    .map((el) => parseInt(el, 16))
  return { r: rgb[0], g: rgb[1], b: rgb[2] }
}

console.log(hexStringToRGB("#FF9933")) //{r:255, g:153, b:51}
console.log(hexStringToRGB("#beaded")) //{r:190, g:173, b:237}
