//  passing {} means that is an target of other object to return to a new value or the new value will be stored in the first object we r passing 
//  by using assing
//  array object is also an object
// destructuring is used to get the values from the object
// json is a object notation

const school = {}

school.name="alan"
school.stdId=87654
school.stdage=24
school.avalable=true
// console.log(school);

const vegDish ={
    link: "https://www.vegrecipesofindia.com/recipes/",
    list: {
        veg :{
            name:"coffee",
            price:100
        }
    }
}
// console.log(vegDish.list.veg.name);

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 ={ 4: "d", 5: "e", 6: "f"};

// const obj3 = {...obj1,...obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({} ,obj1,obj2)

// console.log(obj3);
// console.log(Object.keys(school));
// console.log(Object.values(school));
// console.log(Object.entries(school));


// console.log(school.hasOwnProperty("name"));
// console.log(school.hasOwnProperty("punith"));

const course={
    coursename:"javascript",
    courseId: 343,
    coursePrice:899
}
// console.log(course.courseId);
const {coursename: cn, courseId: id, coursePrice: price}=course
// console.log(cn,id);


