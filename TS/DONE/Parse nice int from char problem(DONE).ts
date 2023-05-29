export function get_age(age: string): number {
  return parseInt(age[0])
}

console.log(get_age("2 years old"))
console.log(get_age("5 years old"))
console.log(get_age("7 years old"))
console.log(get_age("9 years old"))
