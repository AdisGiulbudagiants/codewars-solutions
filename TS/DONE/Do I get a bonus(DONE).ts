export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return bonus ? `£${salary * 10}` : `£${salary}`
  }
}

console.log(Kata.bonusTime(10000, true)) //£100000
console.log(Kata.bonusTime(10000, false)) //£10000
