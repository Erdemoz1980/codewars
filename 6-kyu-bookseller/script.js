function stockList(books, cats){
  
  let booksQts = {};

  //Create categories
  cats.forEach(cat => {
    booksQts[cat] = 0
  })
   
  //Populate categories with total numbers
  for (i = 0; i < books.length; i++){
    let bookCat = books[i][0];
    let bookQty = Number(books[i].split(' ')[1]);
    booksQts[bookCat] = (booksQts[bookCat] || 0)+bookQty ;  
    
  }
  
  let result = [];
  let arr = Object.entries(booksQts)
     
  for(i=0;i<arr.length;i++){
     arr[i].splice(0,2,'(',arr[i][0],' ',':',' ',arr[i][1],')',' ','-',' ')           
  }
  
  const str = arr.flat().join('')
  
   const sliced = str.slice(0,str.length-2)
   
   console.log(sliced)
  console.log("(A : 0) - (B : 1290) - (C : 515) - (D : 600)")
   
   return sliced
  

  
  }


  stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B", "C", "D"])


  //A very frustrating challenge!