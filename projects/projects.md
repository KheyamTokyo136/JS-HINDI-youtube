# Project related to DOM
## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 
## project 1
```javascript
const button=document.querySelectorAll(".button")

const body=document.querySelector("body")

button.forEach(function (button){
    console.log(button);
    button.addEventListener("click",function(e){
    
        console.log(e);
        console.log(e.target);

        if(e.target.id==='grey')
        body.style.background=e.target.id

        if(e.target.id==='blue')
        body.style.background=e.target.id

        if(e.target.id==='white')
        body.style.background=e.target.id

        if(e.target.id==='yellow')
        body.style.background=e.target.id


        
})
    
})


```
# solition code
## project 2
```javascript
const form=document.querySelector('form')
// const height=document.querySelector("#height")
// this usecase will give you empty valur

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value);
    const weight= parseInt(document.querySelector("#weight").value);
    const result= document.querySelector("#results");
    if(height==''|| height<0 || isNaN(height))
    {
        result.innerHTML=`plz enter valid height ${height}`
        
    }
    else if(weight==''|| weight<0 || isNaN(weight))
    {
        result.innerHTML=`plz enter valid weight ${weight}`
    }
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       result.innerHTML=`result =${bmi}`
       if (bmi < 18.6)
    {
        result.innerHTML=(`${bmi}<br> you are underweight⚠️`);
        
    }
    else if(bmi<24.9)
    {
       result.innerHTML=(`${bmi} <br> you weight is normal✅`);
    }
    else{
         result.innerHTML=(`${bmi} <br> you are overweight❌`);
    }
    }
    
    
})
```

# project3 solution code 
```javascript
const clock=document.getElementById("clock")

 setInterval(function() {
    const date= new Date();
//  console.log(date.toLocaleTimeString())
   clock.innerHTML=date.toLocaleTimeString()
 },1000)
```

# project4 solution code
```javascript
let randnum=parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessField")
const guesslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const startover=document.querySelector(".resultParas")

const p=document.createElement("P")

let prevguess=[]
let numguess=1

let playgame=true;

if(playgame)
{
    submit.addEventListener("click",function(e){
   e.preventDefault();
   const guess=parseInt(userinput.value)
   console.log(guess);
   validate(guess)
   
}); 
}

function validate(guess) {
    if (isNaN(guess)){
        alert("plx enter valid number")
    }
    else if (guess < 1) {
        alert("plx enter number grater than 1")
    }
     else if (guess > 100) {
        alert("plx enter number less than 100")
    }
    else{
        prevguess.push(guess)
        if (numguess===11) {
            displayguess(guess)
            displaymessage(`Game over. Random was ${randnum}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    if (guess===randnum) {
        displaymessage(`you gussed it right`)
        endgame()
    }
    else if (guess < randnum ) {
        displaymessage(`you guess is too low`)
    }
    else if (guess > randnum ) {
        displaymessage(`you guess is too high`)
    }
}

function displayguess(guess) {
    userinput.value=''
    guesslot.innerHTML +=`${guess}    `
    numguess++
    remaining.innerHTML=`${12-numguess}`
}

function displaymessage(message) {
 lowOrHi.innerHTML=`${message}`
}

function endgame() {
    userinput.value=""
    userinput.setAttribute("disabled"," ")
    p.classList.add("button")
    p.innerHTML="<h2 id='startgame'>Start new game</h2>"
    startover.appendChild(p)
    playgame=false
    startgame()
}

function startgame() {
    const startgamebutton=document.querySelector("#startgame")
    startgamebutton.addEventListener("click", function (e) {
        randnum=parseInt(Math.random()*100+1)
        prevguess=[]
        numguess=1
        guesslot.innerHTML=''
         remaining.innerHTML=`${12-numguess}`
         userinput.removeAttribute("disabled")
         startover.removeChild(P)

        playgame=true
    })
}
```