// Immediate invoke function ;to avoid the global scop pollution of the variables
function chai(){
    console.log("db connected");
}
// chai()

(function chai(){
    // console.log("db connected");
})();

// writting it arrow function
(()=>{console.log(`"love you"`)})()