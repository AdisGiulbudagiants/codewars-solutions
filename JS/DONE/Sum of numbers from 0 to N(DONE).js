var SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count < 0) return `${count}<0`
    if (count == 0) return "0=0"

    let sum = 0
    let stringNum = []

    for (let i = 0; i <= count; i++) {
      stringNum.push(i)
      sum += i
    }
    return stringNum.join("+") + " = " + sum
  }

  return SequenceSum
})()

console.log(SequenceSum.showSequence(30))
console.log(SequenceSum.showSequence(6))
console.log(SequenceSum.showSequence(0))
console.log(SequenceSum.showSequence(-15))
