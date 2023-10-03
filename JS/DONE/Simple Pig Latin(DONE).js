function pigIt(str) {
  return str
    .split(" ")
    .map((el) => {
      return /^[a-zA-Z]+$/.test(el) ? el.slice(1) + el[0] + "ay" : el
    })
    .join(" ")
}

console.log(pigIt("Pig latin is cool")) //igPay atinlay siay oolcay
console.log(pigIt("Hello world !")) //elloHay orldway !
