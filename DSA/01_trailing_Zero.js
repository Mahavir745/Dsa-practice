const input= require("readline-sync")


let n= input.questionInt("Enter No: ")
let div=0;
let sum=0;
let i=1;

while(n>=div){
  let result= parseInt(n/(5**i));
  sum+=result;
  div=5**i;
  i++
}

console.log(sum);