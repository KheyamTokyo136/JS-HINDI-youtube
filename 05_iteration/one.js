// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==5) {
        // console.log(i,"=it is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);

//for loops
for (let i = 1; i <=10; i++) {
    // console.log(`outer loop${i}`);
    
     
    for (let j = 1; j <=10; j++) {
        // console.log(`inner loop ${j} in outer loop${i}`);

        // console.log(i+ "*" + j+ "=" +i*j);
        
        
    }
    
}
// const myarray=["kheyam" ,"good"  ,"morning"]
// console.log(myarray.length);

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
    
// }



//// breaks continue


 for (let index = 1; index <+ 20; index++) {
    if (index==5) {
        console.log(`dtected ${index}`);
        break
        
    }
     console.log(`valiue of i= ${index}`);
    
    
 }
 for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`dtected ${index}`);
        continue
        
    }
     console.log(`valiue of i= ${index}`);
    
    
 }