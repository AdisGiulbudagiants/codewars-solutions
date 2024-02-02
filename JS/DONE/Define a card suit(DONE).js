function defineSuit(card) {
  if (card.includes("♣")) return "clubs"
  if (card.includes("♦")) return "diamonds"
  if (card.includes("♥")) return "hearts"
  if (card.includes("♠")) return "spades"
}

console.log(defineSuit("3♣")) //  'clubs'
console.log(defineSuit("3♦")) // 'diamonds'
console.log(defineSuit("3♥")) // 'hearts'
console.log(defineSuit("3♠")) // 'spades'
