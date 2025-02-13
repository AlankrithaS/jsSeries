const coding = [1,2,3,4,5,6,7,7,8]
let num=coding.filter( (num) => num<5) ;
// console.log(num);

// const myNums = [ 1,2,3,4,5,66,7777,4];
// const nums = [];
// myNums.filter((num) => {
//     if (num < 50) {
//         nums.push(num);
//     }
// });
// console.log(nums);


// const nums =myNums.filter((num) => num<50 )
// console.log(nums)
let myNums = [ 1,2,3,4,5,66,7777,4];

// const newList=myNums.filter((items)=>items<50)
// console.log(newList)
const newArray=[]

myNums.forEach((item)=> {
    if(item>50){
        newArray.push(item)
    }
})
// console.log(newArray)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// console.log(books.title)
// books.forEach((items)=>{
//     console.log(items.title,items.genre);
// })
const oldBooks = books.filter((items) => {
    return items.publish < 2000;
});

// console.log(oldBooks);


// const numL = [ 1,2,3,4,5,6,7,8]
// let newL= []
// numL.map((values) => {
//     newL.push(values * 10);
// });
// console.log(newL);

const numL = [ 1,2,3,4,5,6,7,8]
// let newL= numL.map((values) =>  values+3)
// console.log(newL)


 