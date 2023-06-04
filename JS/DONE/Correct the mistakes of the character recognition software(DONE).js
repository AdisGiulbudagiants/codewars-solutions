function correct(string) {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I")
}

console.log(correct("L0ND0N")) //"LONDON"
console.log(correct("DUBL1N")) //"DUBLIN"
console.log(correct("51NGAP0RE")) //"SINGAPORE"
console.log(correct("BUDAPE5T")) //"BUDAPEST"
