export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1
  }
  let count: number = -1
  let currentHeight: number = h

  while (currentHeight > window) {
    currentHeight *= bounce
    count += 2
  }
  return count
}

console.log(bouncingBall(3, 1, 1.5)) //-1
console.log(bouncingBall(3.0, 0.66, 1.5)) //3
console.log(bouncingBall(30.0, 0.66, 1.5)) //15
console.log(bouncingBall(30, 0.75, 1.5)) //21
