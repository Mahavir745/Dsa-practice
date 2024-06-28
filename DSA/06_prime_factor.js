const input = require("readline-sync")

let a = input.questionInt("Enter No a: ")

let i=2;
while(i*i<a){

  while(a%i==0){
    console.log(i);
    a=a/i;
  }
  i++;
}

if(a>1){
  console.log(a);
}

// todo: outer loop(root n) and inner loop rot n (log n) = O(root n)(log n)