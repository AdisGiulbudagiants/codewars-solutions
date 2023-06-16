function shortcut(string) {
  return string.replace(/[aeoiu]/g, "")
}

console.log(shortcut("hello")) //'hll'
console.log(shortcut("codewars")) //'cdwrs'
console.log(shortcut("goodbye")) //'gdby'
console.log(shortcut("HELLO")) //'HELLO'
