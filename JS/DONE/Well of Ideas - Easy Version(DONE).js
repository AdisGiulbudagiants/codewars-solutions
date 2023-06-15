function well(x) {
  const res = x.filter((el) => el === "good")
  if (res.length == 0) return "Fail!"
  if (res.length == 1 || res.length == 2) return "Publish!"
  if (res.length > 2) return "I smell a series!"
}

console.log(well(["bad", "bad", "bad"])) //Fail!
console.log(well(["good", "bad", "bad", "bad", "bad"])) //Publish!
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
) //I smell a series!
