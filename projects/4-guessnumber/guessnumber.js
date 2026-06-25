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