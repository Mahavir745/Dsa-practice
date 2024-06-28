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


let hcf;

if(a!=0){
  hcf=a;
}
else{
  hcf=b;
}


let lcm= (a*b)/hcf;
console.log(lcm);