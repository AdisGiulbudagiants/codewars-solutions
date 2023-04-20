function areYouPlayingBanjo(name) {
  const arr = name.toLowerCase().split("")
  return arr[0] === "r" ? `${name} plays banjo` : `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Adis"))
