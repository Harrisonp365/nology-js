function descendingOrder(n){
    let nArr = String(n).split('').map((n) => {
      return Number(n);
    });
    return nArr.sort();
}

console.log(descendingOrder(123));