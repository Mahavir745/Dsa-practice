


let i=3;
let n=48;

let maskValue= 1<<i
console.log(maskValue);

if((n & maskValue )===0){
  console.log("OFF");
}
else{
  console.log("ON");
}