const input = require("readline-sync")

let n = input.questionInt("Enter No n: ")

// todo: write a program to find wheather a number is a power of n

function powerOfn(n){
  if(n!=0){
    if((n & (n-1)) == 0){
      return "YES"
    }else{
      return "NO"
    }
  }
  else{
    return "NO"
  }
}