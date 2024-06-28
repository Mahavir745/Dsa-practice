const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

let count=0;
while(n>0){
  n= n & (n-1);
  count++
}

console.log(count);