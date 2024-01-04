function dup(s) {
  return s.map((el) => {
    return el
      .split("")
      .filter((char, index, array) => {
        return index === 0 || array[index - 1] !== char
      })
      .join("")
  })
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])) //['codewars','picaniny','hubububo']
