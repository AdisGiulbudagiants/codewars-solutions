export function getGrade(a: number, b: number, c: number): string {
  const res = (a + b + c) / 3
  if (res >= 90 && res <= 100) {
    return "A"
  } else if (res >= 80 && res < 90) {
    return "B"
  } else if (res >= 70 && res < 80) {
    return "C"
  } else if (res >= 60 && res < 70) {
    return "D"
  } else {
    return "F"
  }
}

console.log(getGrade(95, 90, 93)) // A
console.log(getGrade(44, 55, 52)) // F
