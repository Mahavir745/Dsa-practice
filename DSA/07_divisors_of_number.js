const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

let i=0;

for(i=1; i*i<=n; i++){
  if(n%i==0){
    console.log(i);
  }
}                                         //todo: time complicity O(root of n)

for(; i>=1; i--){
  if(n%i==0 && i!=n/i){
    console.log(n/i);
  }
}