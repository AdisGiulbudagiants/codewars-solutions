var splitInParts = function (s, partLength) {
  return s
    .split("")
    .map((letter, index) =>
      index > 0 && index % partLength === 0 ? " " + letter : letter
    )
    .join("")
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3)) //"sup erc ali fra gil ist ice xpi ali doc iou s"
console.log(splitInParts("HelloKata", 1)) //"H e l l o K a t a"
console.log(splitInParts("HelloKata", 9)) //"HelloKata"
