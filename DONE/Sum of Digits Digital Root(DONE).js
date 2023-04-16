function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0)
  }
  return n
}

console.log(digitalRoot(132189))
