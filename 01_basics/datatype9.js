// primitive data type 
// 7types : string number boolean null undefined symbol bigint

const string="2323"
const integer=1223
const scorevalue=100.6
const isloggedin=true
const outsidetem=null
let useremail;
let bignumber=234234n
let value= Symbol("1234") 
let valuemethod= Symbol("1234") 
// console.log(value==valuemethod)
// console.log ( typeof bignumber )

// non primitive datatype 
// object function array 
const array=["kheyam", "khan" ,"ali"]
let object={
         name:"kheyam",
         rollno: 25
}
let myfunction=function(){
    console.log("hello world") 
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive data type) heap(non primitive data type)
let myname='kheyam'
let lastname=myname
lastname='khan'
console.log(myname)
console.log(lastname)
let userone={
    email:"khankheyam41@gmail.com",
    uip:'@quhsas'
}
let usertwo=userone
usertwo.email='khan1232@dksd'
console.log(userone)
console.log(usertwo)
