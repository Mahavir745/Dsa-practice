const input = require("readline-sync")

//! Find the position of the right most set bit 
//! e.g: 8 = 1000  => 4th place is set bit here

let n = input.questionInt("Enter No n: ")

function postionSetBit(n){
  let mask= n & (n-1);
  return Math.log10(n^mask)/Math.log10(2)+1
}

console.log(postionSetBit(n));