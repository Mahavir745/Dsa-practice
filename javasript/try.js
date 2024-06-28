// try{
//   console.log(a);
// }
// catch (err){
//   // console.log(err); //err is a type of object
//   console.dir(err); //to see in a object form
// }
// console.log(3+4); 



async function httpRequest(){

  try{
    const url= "https://dummyjson.com/products"
    const response= await fetch(url);
    const data= await response.json()
    console.log(data);
    return data
  } 
  catch(err){
    console.log(err);
  }
}

httpRequest().then((products)=>{
  console.log(products.products);
})