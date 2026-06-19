// for of 
["","",""]
[{},{},{}]
let array=[1,2,3,4,5]
for (const num of array) {
    // console.log(num);
}

let greeting="hello world"
for (const greet of greeting) {
    // console.log(greet);
    
}

const map=new Map()
map.set('in',"india")
map.set('usa',"united state of america")
map.set('fr',"france")
map.set('in',"india")
// console.log(map);

for (const [key , value] of map) {
    // console.log(key ,":>", value);
    
}

const obj= {
    'in':"india",
  'usa' :'united state of america',
  'fr' :'france',
  'usa' :'united state of america',
  'fr' :'france'
}
// for (const [key , value] of obj) {
//      console.log(key ,":>", value);
// }