export class Kata {
  static highAndLow(numbers: string): string {
    const arr: number[] = numbers.split(" ").map((el) => parseInt(el))
    const max: number = Math.max(...arr)
    const min: number = Math.min(...arr)
    return `${max} ${min}`
  }
}

console.log(Kata.highAndLow("1 2 3 4 5"))
console.log(Kata.highAndLow("1 9 3 4 -5"))
