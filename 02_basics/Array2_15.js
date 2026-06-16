const array1=["kheyam ", "azhar" ,"hizar"]
const array2=[" boy1", "boy2" ,"boy3"]
// array1.push(array2)
// console.log(array1[3][2]);

// const newarray=array1.concat(array2)
// console.log(newarray);


// const newarray=[...array1,...array2]
// console.log(newarray);

const another_array=[1,2,3,[4,5],[6,7,[8,9]]] //to solve this we use flate
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("kheyam"));
console.log(Array.from("kheyam"));
console.log(Array.from({name:"kheyam"}));//intersecting

let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3));



