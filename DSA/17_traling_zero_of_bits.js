const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

function tralingzeroOfbit(n){

  let mask = n & (n-1)
  return Math.log(mask ^ n)/Math.log(2)
}

console.log(tralingzeroOfbit(n));