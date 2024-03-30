var flatten = function (array) {
  return array.flat()
}

console.log(flatten([1, 2, 3])) //[1,2,3]
console.log(
  flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3],
  ])
) //[1,2,3,"a","b","c",1,2,3]

console.log(flatten([[[1, 2, 3]]])) //[[1,2,3]]
