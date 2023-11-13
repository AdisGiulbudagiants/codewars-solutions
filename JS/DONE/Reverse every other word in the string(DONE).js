function reverse(str) {
  return str
    .split(" ")
    .map((el, index) => {
      return index % 2 !== 0 ? el.split("").reverse().join("") : el
    })
    .filter((el) => el !== "")
    .join(" ")
}

console.log(reverse("    ")) //''
console.log(reverse("Reverse this string, please!")) //"Reverse siht string, !esaelp"
console.log(reverse("I really don't like reversing strings!")) //"I yllaer don't ekil reversing !sgnirts"
