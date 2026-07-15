const myArray=[]
// %DebugPint(myArray)

//contineous holy
// smi(small interger )
// packed element
//  double(float, string , function)

const array2=[1,2,3,4,5]

// packed SMI element we do not push any other type of element in the array

array2.push(6)
// packed double element

array2.push("7")
// packed element
array2[10]=11
// holy elements 
console.log(array2);
console.log(array2.length);
console.log(array2[9]);

// bound check
// hasOwnProperty(array2, 9)
// hasOwnProperty(array2.prototype, 9)
// hasOwnProperty(object.prototype, 9)

// holes are very expensive in js
  

const arraythree=[1,2,3,4,5]
console.log(arraythree[2]);

// SMI>Double>packed
// SMI.hj>double.h>packed.h
 
const arrayfour=new Array(3)
//  just three hole holy_smi_elements
arrayfour[0]="1" //holy element
arrayfour[1]="2" //holy element
arrayfour[2]="3" //holy element

const arrayfive=[]
arrayfive[0]='1' //packed element
arrayfive[1]='2' //packed element
arrayfive[2]='3' //packed element