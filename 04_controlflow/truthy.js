const useremail=[]
 if (useremail)
 {
    console.log("it is email ");
    
 }
 else {
    console.log("useremail is empty");
    
 }
//  falsy values
// false,0,-0, Bigint0n,null,undefined,NaN,""

// truthy values
// "0"," ","false",[],{},function(){}

// if (useremail.length===0)
// {
//     console.log("it is empty");
    
// }

// const emptyobj={}

// if(Object.keys(emptyobj).length===0)
// {
//     console.log("empty object");
    
// }


// Nullish coalscing operator ??: undefined and null
let val;
// val=15 ?? 10
// val=null ?? 12;
// val=undefined ?? 134
// val=null ?? 10 ?? 20

// console.log(val);


// terniaru operator
//  condition ? true:false 

const teaprice=100
teaprice <=70  ? console.log("less than 70"):console.log("greater than 70");
