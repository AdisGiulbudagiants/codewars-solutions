function kebabize(str) {
  return str
    .split(/(?=[A-Z])/)
    .map((el) => el.replace(/\d/g, "").toLowerCase())
    .join("-")
}

console.log(kebabize("camelsHaveThreeHumps")) //"camels-have-three-humps"
console.log(kebabize("camelsHave3Humps")) //"camels-have-humps"
console.log(kebabize("CAMEL")) //"c-a-m-e-l"
