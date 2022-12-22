function stockList(books, cats){
  let booksQts = {};

  cats.forEach(cat => {
    booksQts[cat] = 0
  })
   
  for (i = 0; i < books.length; i++){
    let bookCat = books[i][0];
    let bookQty = Number(books[i].split(' ')[1]);
    booksQts[bookCat] = (booksQts[bookCat] || 0)+bookQty ;
  }


console.log(booksQts)
  
  }


  stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "D"])


  //A very frustrating challenge!