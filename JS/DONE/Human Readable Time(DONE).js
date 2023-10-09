function humanReadable(seconds) {
  let h = "00"
  let m = "00"
  let s = seconds

  while (s > 59) {
    m++
    s -= 60
    while (m > 59) {
      h++
      m -= 60
    }
  }

  return `${h.toString().padStart(2, 0)}:${m.toString().padStart(2, 0)}:${s
    .toString()
    .padStart(2, 0)}`
}

console.log(humanReadable(0)) //'00:00:00'
console.log(humanReadable(5)) //'00:00:05'
console.log(humanReadable(59)) //'00:00:59'
console.log(humanReadable(60)) //'00:01:00'
console.log(humanReadable(90)) //'00:01:30'
console.log(humanReadable(3599)) //'00:59:59'
console.log(humanReadable(3600)) //'01:00:00'
console.log(humanReadable(86400)) //'24:00:00'
console.log(humanReadable(359999)) //'99:59:59'
