async function httpRequest(){
  let url= "https://dummyjson.com/products"
  let response= await fetch(url)
  const data= await response.json()
  console.log(data);

  // throw "an Error"  // it's help to give an Error
  // throw new Error("Hello world") // it's is also a way to give an error
}

httpRequest()
