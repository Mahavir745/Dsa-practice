const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

function consecutiveBit(n){
  let count=0;

  while(n>0){
    let mask = (n<<1) & n;
    n= mask;
    count++;
  }

  return count
}

console.log(consecutiveBit(n));