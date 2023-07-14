function hello(name = "World") {
  if (name === "") return "Hello, World!"
  const upperName = name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1)
  return `Hello, ${upperName}!`
}

console.log(hello()) //'Hello, World!'
console.log(hello("")) //'Hello, World!'
console.log(hello("alice")) //'Hello, Alice!'
console.log(hello("john")) //'Hello, John!'
