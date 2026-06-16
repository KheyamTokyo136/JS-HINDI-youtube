// const tinderuser= new Object() called singleton object constructor object
const tinderuser={}
tinderuser.email="kjk@34823y"
tinderuser.id="123abcd"
tinderuser.isloggedin=false
// console.log(tinderuser);

const regularuser={
    email:"jsfhbj23e",
    fullname:{
           userfullname:{
            firstname:"kheyam",
            secondname:"khan"
           }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 6:"b"}

// const obj3={obj1,obj2}
// console.log(obj3);

//  const obj3=Object.assign({},obj1,obj2,obj4)
//  console.log(obj3);

// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const user=[
    {
        id:"12",
        email:"jkjs2k@ru454u",
    },

    {
        id:"12",
        email:"jkjs2k@ru454u",
    },
        {
        id:"12",
        email:"jkjs2k@ru454u"
    }

]
user[1].email

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("email"));

const course={
    coursename:"js in hindi ",
    courseinstructor:"kheyam",
    courseprice:999
}
//   course.courseinstructor 
  const {courseinstructor:instructor}=course // destructure 
  console.log(instructor);
  

// {
//     "coursename":"js in hindi ",
//     "courseinstructor":"kheyam",
//    " courseprice":999
// }                                    it is jason in API


[
    {},
    {},
]

  

 

