function DNAtoRNA(dna) {
  
  const conversion = {"G":"G","C":"C","A":"A","T":"U"}
  
  return dna.split('').map(e=>conversion[e]).join('')
}

