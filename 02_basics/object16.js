//singleton 
// object constructor 
//object Literals

let mySymbol= Symbol("mykey1")
const jsuser={
    name:"kheyam",
    [mySymbol]:1234,
    "full name":"kheyam khan",    //it is can't access by dot 
    email:"kheyamkhan@gmail.com",
    age:"20",
    location:"khalil",
    Isloggedin:false,
    LastLoginDays:["Monday","saturday"]
} 
console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser["full name"]);
console.log(typeof mySymbol);

jsuser.email="khankheyam24568"
console.log(jsuser["email"]);
// Object.freeze(jsuser)
jsuser.email="khankheya@54djj"
console.log(jsuser["email"]);
console.log(jsuser);
jsuser.greeting=function()
{
    console.log("hello js user")
}
console.log(jsuser.greeting());// greeting ectute fuction refrence 



jsuser.greeting2=function()
{
    console.log(`hello js user,${this.name}` )
}
console.log(jsuser.greeting2());



