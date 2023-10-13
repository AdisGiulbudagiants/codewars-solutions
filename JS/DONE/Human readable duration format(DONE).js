function formatDuration(seconds) {
  if (seconds === 0) return "now"

  const timeUnits = {
    year: 365 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  }

  const result = []

  for (const [unit, unitSeconds] of Object.entries(timeUnits)) {
    const count = Math.floor(seconds / unitSeconds)
    if (count > 0) {
      result.push(count + " " + (count > 1 ? unit + "s" : unit))
      seconds -= count * unitSeconds
    }
  }

  return result.length > 1
    ? result.slice(0, -1).join(", ") + " and " + result.slice(-1)
    : result[0]
}

console.log(formatDuration(15731080)) //'182 days, 1 hour, 44 minutes and 40 seconds'
console.log(formatDuration(0)) //"now"
console.log(formatDuration(1)) //"1 second"
console.log(formatDuration(62)) //"1 minute and 2 seconds"
console.log(formatDuration(120)) //"2 minutes"
console.log(formatDuration(3600)) //"1 hour"
console.log(formatDuration(3662)) //"1 hour, 1 minute and 2 seconds"
