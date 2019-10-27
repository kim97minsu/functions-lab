function chessBoard(str, innerSize, outerSize) {

  for(let i=0; i<outerSize; i++) { 
    
    hashtags = ''
    
    for(let j=0; j<innerSize; j++) {

      if (i % 2) { // i is 1, 3, 5, 7 case
        hashtags += str
        hashtags += " "
      }
      else { // i is 0, 2, 4, 6 case
        hashtags += " "
        hashtags += str
      }
    }
    console.log(hashtags)
  } 
}
chessBoard('#', 8, 8)
