const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")


function swapEven_Odd(n){

  return ((n & 0xaaaaaaaa)>>>1)|((n & 0x55555555)<<1)
}

console.log(swapEven_Odd(n));

// todo: 0xaaaaaaaa = -1431655766
// todo: 0x55555555 = 1431655766  these are the medium for swapping
