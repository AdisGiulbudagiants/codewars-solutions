export function updateLight(current: string) {
  const trafficLight: string[] = ["green", "yellow", "red"]
  const nextTrafficLight =
    (trafficLight.indexOf(current) + 1) % trafficLight.length
  return trafficLight[nextTrafficLight]
}

console.log(updateLight("red"))
console.log(updateLight("yellow"))
console.log(updateLight("green"))
