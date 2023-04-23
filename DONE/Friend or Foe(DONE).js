function friend(friends) {
  let res = []
  friends.map((el) => {
    if (el.length === 4) {
      res.push(el)
    }
  })
  return res
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
