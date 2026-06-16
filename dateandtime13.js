//date
let mydate= new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());

// console.log(typeof mydate);
// let mycreatedate=new Date(2020, 0, 12 ,5,2,45)
// let mycreatedate=new Date("2020-03-31")
let mycreatedate=new Date("03-22-2026")
// console.log(mycreatedate.toLocaleString());


let mytimestamp=  Date.now()
// console.log(mytimestamp)
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));
const newdate= new Date();
console.log(newdate.getDate());
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);
console.log(newdate.toLocaleString("defacult",
    {
        weekday:"short"
    }
))


