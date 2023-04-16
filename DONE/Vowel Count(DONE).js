// a, e, i, o, u

function getCount(str) {
  const res = str
    .split("")
    .filter(
      (char) =>
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ).length
  return res
}

console.log(getCount("abracadabra"))
