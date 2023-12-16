function cakes(recipe, available) {
  let maxCakes = Infinity

  for (const ingredients in recipe) {
    const availableAmount = available[ingredients] || 0
    const recipeAmount = recipe[ingredients]

    const possibleCakes = Math.floor(availableAmount / recipeAmount)

    if (possibleCakes < maxCakes) maxCakes = possibleCakes
  }
  return isFinite(maxCakes) ? maxCakes : 0
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
) //2

console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
) //0
