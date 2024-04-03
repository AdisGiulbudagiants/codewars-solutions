function combine(...objects) {
  return objects.reduce((result, obj) => {
    for (let key in obj) {
      result[key] = (result[key] || 0) + obj[key]
    }
    return result
  }, {})
}

console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }))
