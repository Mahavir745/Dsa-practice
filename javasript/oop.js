let user= {
  firstname: "Mahavir",
  lastname: "Mahato",
  age: "19",
  getbirthyear (){
    let year = new Date().getFullYear() - user.age
    return year
  }
}

//todo: Encapsulation : the way to group whole data in one place. It is like packaging related stuff together in a box to keep it sage and organized.

//todo: Abstraction: It is like using something without needing to understand all the inner workings, focusing only on what's important for you

