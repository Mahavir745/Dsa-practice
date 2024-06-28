const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

let f = 31
let rev =0;
let l= 0;

while(f>l){

  if((n & (1<<f)) != 0){
    rev = rev | (1<<l)
  }


  if((n & (1<<l)) !=0){
    rev = rev | (1<<f)
  }

  f--;
  l++;
}
console.log(rev);