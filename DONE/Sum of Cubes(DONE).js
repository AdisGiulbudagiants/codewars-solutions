// Оператор ** возводит в степень число

const sumCubes = (n) => {
  if (n == 1) {
    return n ** 3
  } else {
    return n ** 3 + sumCubes(n - 1)
  }
}

console.log(sumCubes(2))
