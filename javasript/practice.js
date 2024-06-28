
function htmlremove(string){

  let found=false;
  let newstr=""
  for(let i=0; i<string.length; i++){
    if(string[i]=='<'){
      found=true
    }
    else if(string[i]==">"){
      found= false;
    }
    else if(!found){
      newstr+=string[i]
    }
  }

  return newstr
}


let result = htmlremove("<h1>String Hello</h1>")
console.log(result);