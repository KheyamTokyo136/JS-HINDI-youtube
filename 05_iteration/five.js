const coding=["oop","c++","js", "java","ruby"]

// coding.forEach(function (item){
//    console.log(item);
   
// })
  

// coding.forEach((val)=>{
//     console.log(val);
    
// })

// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach((item,index,array)=>{
//    console.log(item,index,array);
   
// })


const mycoding=[
    {
        languagename:"javascript",
        languagefile:"js"
    },
    {
        languagename:"object oriented programming",
        languagefile:"oop"
    },
    {
        languagename:"java",
        languagefile:"java"
    }
]


mycoding.forEach((item)=>{
    console.log(item.languagename,item.languagefile);
    
})