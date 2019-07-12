function printEvens(x, y) {
    for (let i=x; i<=y; i++) {
      if(i % 2 == 0) {
        console.log(i);
      }
    }
  }
printEvens(41,72);