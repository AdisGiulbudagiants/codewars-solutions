export function bmi(weight: number, height: number): string {
  const bmiValue: number = weight / height ** 2
  if (bmiValue <= 18.5) {
    return "Underweight"
  } else if (bmiValue <= 25.0) {
    return "Normal"
  } else if (bmiValue <= 30.0) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

console.log(bmi(80, 0.9)) //Normal
