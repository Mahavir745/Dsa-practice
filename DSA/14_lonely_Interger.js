let arr= [ 2,2,3,4,5,5,4]

let result =  0;

arr.forEach((element)=>{
  result = result ^ element
})

console.log(result);