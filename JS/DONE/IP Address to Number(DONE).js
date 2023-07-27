function ipToNum(ip) {
  const res = ip
    .replace(/[.]/g, " ")
    .split(" ")
    .map((el) => {
      return parseInt(el).toString(2).padStart(8, "0")
    })
    .join("")

  return parseInt(res, 2)
}

function numToIp(num) {
  const res = BigInt(num, 2).toString(2).padStart(32, "0")
  return res
    .match(new RegExp(`.{1,${8}}`, "g"))
    .map((el) => {
      return parseInt(el, 2)
    })
    .join(".")
}

// console.log(ipToNum("192.168.1.1")) //3232235777
// console.log(ipToNum("10.0.0.0")) //167772160
// console.log(ipToNum("176.16.0.1")) //2953838593

console.log(numToIp(3232235777)) //"192.168.1.1"
console.log(numToIp(167772160)) //"10.0.0.0"
console.log(numToIp(2953838593)) //"176.16.0.1"
