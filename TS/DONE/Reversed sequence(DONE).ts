export const reverseSeq = (n: number): number[] => {
  let res: number[] = []
  for (let i: number = n; i > 0; i--) {
    res.push(i)
  }
  return res
}

console.log(reverseSeq(5))
