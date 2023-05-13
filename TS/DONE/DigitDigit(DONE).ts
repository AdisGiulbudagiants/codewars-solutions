export class Kata {
  static squareDigits(num: number): number {
    const arr: number[] = num.toString().split("").map(Number)
    const sqr: string = arr.map((el) => Math.pow(el, 2)).join("")
    const result: number = Number(sqr)
    return result
  }
}

console.log(Kata.squareDigits(9119))
