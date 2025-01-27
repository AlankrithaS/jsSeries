const myArray = [1, 2, 3, 4, 5];
// console.log(myArray[2]);
const myHero = new Array(1,2,3,4)
// console.log(myHero[2]);

//Array methonds
// myArray.push(10,4)
// myArray.pop()

myArray.shift(9)
// console.log(myArray.includes(2));
// console.log(myArray.indexOf(8))

const friendS = ['sakib', 'tamim', 'mus', 'mash', 'rafiq']
const enimeS = ['sakib', 'tamim', 'mus', 'mash', 'rafiq']
friendS.push("punith")
// console.log(friendS[3])
// console.log(friendS.concat(enimeS));
const allT = [...friendS, ...enimeS]    //spread operator
// console.log(allT);

const anotherArray= [ 1,2,3,[2,4,5,7],[9,8,7,[9,8,77]]]
// console.log(anotherArray);

// console.log(anotherArray.flat(2));
let name="alan"

// console.log(Array.isArray(name));
// console.log(Array.from(name));

let score=100;
let score1=200;
let score3 = 800;
// console.log(score+score1+score3);
// console.log(Array.of(score,score1,score3));







