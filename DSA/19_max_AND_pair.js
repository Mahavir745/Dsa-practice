
function checkBit(arr,mask){

  let count=0;
  for(let i=0; i<arr.length; i++){
    if((mask & arr[i]) == mask){
      count++;
    }
  }

  return count
}

function maxValue(arr){

  let mask=0;
  let res=0;

  for(let i=31; i>=0; i--){
    mask= (1<<i) | res
    let count = checkBit(arr,mask);

    if(count>=2){
      res= res | mask
    }
  }

  return res
}

let arr = [16,9,6,13]

console.log(maxValue(arr));