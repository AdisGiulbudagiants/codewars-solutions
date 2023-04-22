function DNAStrand(dna) {
  const arr = dna.split("")
  return arr
    .map((el) => {
      if (el === "A") return el.replace("A", "T")
      if (el === "T") return el.replace("T", "A")
      if (el === "C") return el.replace("C", "G")
      if (el === "G") return el.replace("G", "C")
    })
    .join("")
}

console.log(DNAStrand("ATTGC")) //TAACG
