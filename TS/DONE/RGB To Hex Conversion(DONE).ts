export function rgb(r: number, g: number, b: number): string {
  const roundedR = Math.max(0, Math.min(255, Math.round(r)))
  const roundedG = Math.max(0, Math.min(255, Math.round(g)))
  const roundedB = Math.max(0, Math.min(255, Math.round(b)))

  const hexR: string = roundedR.toString(16).padStart(2, "0").toUpperCase()
  const hexG: string = roundedG.toString(16).padStart(2, "0").toUpperCase()
  const hexB: string = roundedB.toString(16).padStart(2, "0").toUpperCase()
  return `${hexR}${hexG}${hexB}`
}

console.log(rgb(255, 255, 255))
console.log(rgb(0, 0, 0))
console.log(rgb(148, 0, 211))
