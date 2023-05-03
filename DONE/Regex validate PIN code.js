const validatePIN = (pin) => {
  return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("as234567"))
console.log(validatePIN("1234567"))
console.log(validatePIN("123456"))
console.log(validatePIN("12345"))
console.log(validatePIN("1234"))
console.log(validatePIN("-1234"))
console.log(validatePIN("-1.234"))
console.log(validatePIN("123"))

//Это регулярное выражение соответствует строкам, содержащим либо четыре цифры, либо шесть цифр, и ничего кроме цифр. Знак ^ обозначает начало строки, $ - конец строки. \d обозначает любую цифру, а {4} и {6} указывают, что должно быть ровно 4 или 6 цифр.

// Функция test() проверяет, соответствует ли переданная строка этому регулярному выражению. Она возвращает true, если соответствует, и false, если нет.
