export class Kata {
  static getCount(str: string) {
    let res: number = 0
    const vowel: string[] = ["a", "e", "i", "o", "u"]
    for (let char of str) {
      if (vowel.indexOf(char) !== -1) {
        res++
      }
    }
    return res
  }
}

console.log(Kata.getCount("abracadabra"))
