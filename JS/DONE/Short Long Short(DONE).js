function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

console.log(solution("1", "22")) //"1221"
console.log(solution("22", "1")) //"1221"
console.log(solution("45", "1")) //'1451'
console.log(solution("13", "200")) //'1320013'
console.log(solution("Soon", "Me")) //'MeSoonMe'
