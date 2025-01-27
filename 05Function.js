function addNum(a,b) {
   return a+b;
}
// console.log(addNum(2,1));

function loginIn(name){

   return `${name} is my name.`
}
// console.log(loginIn("alan"));

function check(username){
   if(username === undefined)
{return `${username} pls enter a name`}
   else
   return   `${username} is logged in `
}

// console.log(check());

// const Members={
//    sibling1 :"prabhu",
//    sibling2:"alan"
// }
function accessMembers(anyobject){
   // console.log(`my brother's name is ${Members.sibling1} and my name is ${Members.sibling2}`)
   return
}
accessMembers(Members={
   sibling1 :"prabhu",
   sibling2:"alan"
})
// function family(){return Members.sibling1}
// console.log(family(Members))

function orderPrices(getArray){
   return console.log(...getArray)
}
orderPrices([200,200,200])