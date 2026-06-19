const mynum=[1,2,3]

// const newnum=mynum.reduce(function (acc,currval)
// {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)

const newnum=mynum.reduce((acc,curr)=>  acc+curr,0)
// console.log(newnum);


const shoppingcart=[
    {
        course:"js course ",
        prcie:2999
    },
    {
        course:"oop course ",
        prcie:99
    },
    {
        course:"py course ",
        prcie:3999
    },
    {
        course:"mobile app course ",
        prcie:4343
    },
]
const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.prcie,0)
console.log(pricetopay);
