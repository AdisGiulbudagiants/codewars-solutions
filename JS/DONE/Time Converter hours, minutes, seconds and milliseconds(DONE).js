function convert(time) {
  return (
    time.toTimeString().split(" ")[0] +
    "," +
    time.getMilliseconds().toString().padStart(3, "0")
  )
}

console.log(convert(new Date(2016, 2, 8, 16, 42, 59))) //"16:42:59,000"
console.log(convert(new Date(1951, 10, 31, 2, 2, 24, 399))) //"02:02:24,399"
