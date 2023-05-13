const covfefe = (str) => {
  const rep = str.replace(/coverage/g, "covfefe")
  return rep === str ? str + " covfefe" : rep
}

console.log(covfefe("adis "))
