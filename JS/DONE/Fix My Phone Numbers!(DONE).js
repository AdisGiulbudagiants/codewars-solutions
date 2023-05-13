function isItANum(str) {
  const cleanStr = str.replace(/\D/g, "")
  if (cleanStr.length === 11 && cleanStr[0] === "0") {
    return cleanStr
  }
  return "Not a phone number"
}

console.log(isItANum("S:)0207ERGQREG88349F82!efRFs)"))
