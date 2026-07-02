const promiseone= new Promise(function(resolved,reject){
    // do Asynchronous task
    // DB call , Network ,cryptogrphy 
    setTimeout(function()
    {
        console.log("Asynchrouns is complete");
        resolved()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolved,reject){
    setTimeout(function(){
        console.log("Asyn task 2 complete");
        resolved();
    },1000)
}).then(function(){
    console.log("task 2 complete");
    
})

const promisethree= new Promise(function(resolved,reject){
        setTimeout(function(){
            resolved({username:"kheyam khan" , email:"khankheyam@gmail.com"})
        },1000)
})

promisethree.then(function(user){
       console.log(user);
       
})

const promisefour=new Promise(function(resolved,reject){
    setTimeout(function(){
        let error=true
        if(!error)
            resolved({username:"kheyamkhan", password:"123"})
        else{
            reject("ERROR:something went wrong")
        }
    },1000)
})

promisefour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(name){
    console.log(name)
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log(" THE Promise is either resolved or reject");
    
})

const promisefive=new Promise(function(resolved,reject){
    setTimeout(function(){
        let error=true
        if(!error)
            resolved({username:"javascript", password:"123"})
        else{
            reject("ERROR:JS went wrong")
        }
    },1000)
})


async function promisefiveused() {
    try{const response=await promisefive
    console.log(response);
    } catch(error){
        console.log(error);
        
    }
}

promisefiveused()

// async function getalluser() {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const  data= await response.json() 
//         console.log(data)
//     } catch(error){
//         console.log(error)
//     }
// }
// getalluser()

// fetch("https://jsonplaceholder.typicode.com/users")
fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>console.log(error)
)