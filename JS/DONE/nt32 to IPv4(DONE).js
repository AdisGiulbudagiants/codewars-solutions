function int32ToIp(int32) {
  let byte1 = (int32 >> 24) & 0xff
  let byte2 = (int32 >> 16) & 0xff
  let byte3 = (int32 >> 8) & 0xff
  let byte4 = int32 & 0xff

  return `${byte1}.${byte2}.${byte3}.${byte4}`
}

console.log(int32ToIp(2154959208)) //"128.114.17.104"
console.log(int32ToIp(0)) //"0.0.0.0"
console.log(int32ToIp(2149583361)) //"128.32.10.1"
console.log(int32ToIp(2 ** 32 - 1)) //"255.255.255.255"
