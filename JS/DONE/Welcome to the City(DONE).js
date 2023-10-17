function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"))

console.log(
  sayHello(["Franklin", "Delano", "Roosevelt"], "Chicago", "Illinois")
)
