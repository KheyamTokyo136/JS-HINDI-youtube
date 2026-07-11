// const user={
//     name: "kheyam",
//     usercount: 8,
//     usersigneedin:true,
//     getuserdetail: function(){
//         // console.log("this is user detail");
//         // console.log(`username:${this.name}`);
//            console.log(this);
           
//     }
// }
// console.log(user.name);
// console.log(user.getuserdetail());
// console.log(this);

 function user(username,usercount,isloggedin) { 
    this.username=username
    this.usercount=usercount
    this.isloggedin=isloggedin
    this.greeting=function(){
        console.log(`welcome:${this.username}`);
        
    }
    return this
}

const userone=new user("kheyam",12,true)
const usertwo= new user("good",11,false)
console.log(userone.constructor);
console.log(usertwo instanceof user);
// when we use new create empty object called instances 
// Step 1: A new empty object is created
// Step 2: The new object is linked to the constructor's prototype
// Step 3: The constructor function is called
// Step 4: The new object is returned

