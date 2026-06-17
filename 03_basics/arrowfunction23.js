const user={
    username:"kheyam",
    price:999,
     showmeassge:function(){
        console.log(`${this.username}, welcome to login page`);
        console.log(this);
        
        
    }
}
// user.showmeassge()
// user.username="khan"
// user.showmeassge()
// console.log(this);



// function chai(){
// let username="hammad"
// console.log(this.username)
// }
// chai()
// let chai=function(){
// let username="hammad"
// console.log(this.username)
// }
// chai()


// let chai=()=>{
// let username="hammad"
// console.log(this.username)
// }
// chai()


// const chai=(num1,num2)=>{
//     return num1+num2;
// }
const chai=(num1,num2)=>num1+num2;
// const chai=(num1,num2)=>(num1+num2);
const arrowftn=()=>({username:"kheyam"})

console.log(arrowftn());

console.log(chai(4,5));
