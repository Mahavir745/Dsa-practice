const input = require("readline-sync")

let a = input.questionInt("Enter No a: ")


let count=0;

while(a>0){
  count++
  a=parseInt(a/10)
}

console.log(a);