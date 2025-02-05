const greetings =" alankirtha"

for (const greet of greetings) {
    // console.log(greet)
}
// const map = new Map()
const arr = [1,2,3,4,5]
for (const num of arr){
    // console.log(num)
}

const names = new Map()
    names.set("alan","alankritha"),
    names.set("kakka fellow","punith"),
    names.set("justu","justin"),
    names.set("thanga","vinay"),
    names.set("mushu","vinay"),
    names.set("mushu","mushu"),
    names.set("mushu","vinay")

    // console.log(names)

    // destructureing
for (const [key, values] of names){
    // console.log(key, ":-", values)
}

// for objects 

const myObject ={
    js:"javascript",
    c:"c lang",
    rb:"rubby",
    go:"go lang"
}
for (const obj in myObject){
    // console.log(`${obj} is the sort cut for ${myObject[obj]}`)
}

const languages = ["java","c++","c","js"]

for (const list in languages){
    // console.log(list, languages[list]) 
}

languages.forEach(function (val) {
    // console.log(val);
});

languages.forEach( (items,arr,val) => {
    // console.log(items,arr,val)
});

const arrObj = [
    {
        name:"punith",
        num:139
    },
    {
        name:"alan",
        num:146
    },
    {
        name:"thanga",
        num:162
    }
]

// console.log(arrobj)
arrObj.forEach((items)=>{
    console.log(` ${(items.num)} is ${(items.name)} `); 
})