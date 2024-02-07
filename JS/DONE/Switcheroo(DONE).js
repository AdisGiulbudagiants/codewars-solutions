function switcheroo(x) {
  return x.replace(/a|b/g, (letter) => (letter === "a" ? "b" : "a"))
}

console.log(switcheroo("acb")) //bca
console.log(switcheroo("aabacbaa")) //bbabcabb
