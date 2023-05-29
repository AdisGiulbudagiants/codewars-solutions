export function enough(cap: number, on: number, wait: number): number {
  return wait + on <= cap ? 0 : wait - (cap - on)
}

console.log(enough(10, 5, 5)) //0
console.log(enough(50, 15, 10)) //0
console.log(enough(100, 60, 50)) //10
