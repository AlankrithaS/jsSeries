// learning of block and global scope
// js variables can hold any value like json vaaalue ,function etc
// browers global object is windown thats y we r able to capture the events
if (true){
    const a=10//block
    let b=10
}
let a=1000 //global
// console.log(a)

const user={
    username:"alan",
    price:109,

    wellcome: function(){
       console.log( ` hi ${this.username} welcome this will cost u ${this.price}`);
            return
    }
}
// console.log(user.wellcome())
user.wellcome()
user.price=999;
user.wellcome()

