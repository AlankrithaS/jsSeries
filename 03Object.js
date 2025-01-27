// objects can be created two types literals and contructors 
//  third type is also known as singleton object
// symbol is a new type of object in ES6    


const symbol= Symbol("my symbol");

// console.log(symbol);


const jsUser = {
    name: "alan",
    "ful name" : "alan walker",
    [symbol]: "mysch",
    age:24,
    location: "bangalore",
    email: "alan@gmail.com",
    idLoggedIn: false,
    lastLogged: ["monday","tuesday","saturday"]
}
 
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[symbol]);

jsUser.email="punith@gmail.com";
// console.log(jsUser.email);
// Object.freeze(jsUser);
jsUser.email="alan@gmail.com";
// console.log(jsUser);


jsUser.greeting= function(){
    console.log('hello');
}

jsUser.greeting2= function(){
    console.log(`hello me ${this.email}`);
}

// console.log(jsUser.greeting2());





