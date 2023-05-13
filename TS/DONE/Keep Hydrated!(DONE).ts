export function litres(time: number): number {
  return Math.floor(0.5 * time)
}

console.log(litres(3))
console.log(litres(6.7))
console.log(litres(11.8))
