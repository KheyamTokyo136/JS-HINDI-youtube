class user{
    constructor(username){
        this.username=username
    }
    LogMe(){
        console.log(`user name is :${this.username}`);
        
    }
}

class Teacher extends user{
        constructor(username,email,password){
       super(username)
        this.email-email
        this.password=password
    }
    addcourse(){
        console.log(`course is added by ${this.username}`);
        
    }
}

const chai=new Teacher("chai","chai@gmail.com",123)
chai.LogMe()
chai.addcourse()
const maslaChai=new user("maslachai")
maslaChai.LogMe()
// maslaChai.addcourse() beacuse it haven this method upper run because of inheritance

console.log(chai===maslaChai);
console.log(chai===Teacher);
console.log(chai instanceof Teacher);
