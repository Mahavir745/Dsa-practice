const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")


let sum=0;
let i=0;

while(n>0){
  let num=n%10
  let pow= num*(2**i)
  sum+=pow
  i++
  n=parseInt(n/10)
}

console.log(sum);