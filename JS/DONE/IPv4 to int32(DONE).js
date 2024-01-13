function ipToInt32(ip) {
  const parts = ip.split(".")
  const decimal =
    (parseInt(parts[0]) << 24) |
    (parseInt(parts[1]) << 16) |
    (parseInt(parts[2]) << 8) |
    parseInt(parts[3])

  return decimal >>> 0
}

console.log(ipToInt32("128.32.10.1")) //2149583361
console.log(ipToInt32("128.114.17.104")) //2154959208
console.log(ipToInt32("0.0.0.0")) //0
