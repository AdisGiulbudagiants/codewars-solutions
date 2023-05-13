function solution(start, finish) {
  if (start >= finish) {
    return 0
  } else if (finish - start <= 2) {
    return 1
  } else {
    return solution(start, finish - 1) + solution(start, finish - 3)
  }
}

console.log(solution(2, 4))
