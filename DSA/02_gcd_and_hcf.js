const input = require("readline-sync")

let a = input.questionInt("Enter No a: ")
let b = input.questionInt("Enter No b: ")

while(a!=0 && b!=0){
  if(a>b){
    a=a%b
  }else{
    b=b%a
  }
}

if(a!=0){
  console.log(a);
}
else{
  console.log(b);
}

//! time complicity O(log(min(a,b)))






