// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

//MySolution
function descendingOrder(n){
    let nToStr = n.toString();
    let newArr = nToStr.split("").sort();
    let reverseArr = newArr.reverse().join("");
    const finalNum = Number(reverseArr);
    return finalNum;
  }

// One liner from other solutions
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }
//-------------------------------------------------------------------------------------------------------
