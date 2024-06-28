const input = require("readline-sync")

let a = input.questionInt("Enter No a: ")


let count=0;

for(let i=2; i*i<=a; i++){
  if(a%i==0){
    count++
  }
}

if(count==0){
  console.log("prime");
}else{
  console.log("Not Prime");
}

// todo: time complicity = O(root of (n))