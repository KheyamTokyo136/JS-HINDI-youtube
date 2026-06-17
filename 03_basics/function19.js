function myName()
{
    console.log("k");
    console.log("e");
    console.log("y");
    console.log("a");
    console.log("m");
    console.log("k");
    
}
// myName() // myyName only for refrence 

// function addtwonumber (number1,number2)
// {
//        console.log(number1+number2)
// }
// const result=addtwonumber(3,4)
// console.log("result:" ,result);


function addtwonumber (number1,number2)
{
    //  let result=number1+number2
    //  return result
    //  console.log("kheyam"); not run write before 
    return number1+number2
     
}
const result=addtwonumber(3,4)
// console.log("result:" ,result);

function justloggedin(username="khan")
{
    if (!username)// if (username===undefined)
    {
        return console.log("plz enter name")
        return 
    }
  return `${username} is logged in`

}
// console.log(justloggedin())
// console.log(justloggedin("kheyam"))

function cashprice(val1,val2,...num1){
    return val1,val2,num1
}
// console.log(cashprice(200,300,400,500))

const user={
   name:"kheyam khan",
   price:299
}
function  handleobject(anyobject) {
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleobject(
    {
        name:"good",
        price:999
    }
)



const myarray=[100,200,300]
function returnarray(getarray)
{
    return getarray[0]
}
console.log(returnarray(myarray));
console.log(returnarray(
    [200,200,300]
))
