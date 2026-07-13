// let name="kheyam        "
// console.log(name.truelength);
// console.log(name.trim().length);


const heros=["thor","spiderman"]

const herospower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function()
    {
        console.log(`sling is the power of${this.spiderman}`);
        
    }
}
Object.prototype.kheyam=function()
{
    console.log("kheyam is preset in all object");
}
// herospower.kheyam()
// heros.kheyam()
Array.prototype.heykheyam=function(){
    console.log("kheyam say hello");
    
}
// heros.heykheyam()
// herospower.heykheyam()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    // __proto__: TeachingSupport
}
// console.log(TASupport.isAvailable);
Teacher.__proto__=User
// console.log(Teacher.name);

// modern syntax
Object.setPrototypeOf(Teacher,User)
// console.log(Teacher.name);


let username="kheyam khan     "
String.prototype.truelength=function()
{
    console.log(this);
    console.log(`true lenghth is:${this.trim().length}`);
    
  
}

username.truelength()
"ayann".truelength()
"khannnnnnn".truelength()
