const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

let str=""

while(n>0){
  let num= n%2;
  str=num+str;
  n=Math.floor(n/2)
}

console.log(str);