let input=parseInt(prompt("Let enter your maximum number:"));
while(!input){
    let input=parseInt(prompt("Please enter valid number:"));
}
const targetNum=Math.floor(Math.random()*input)+1
let guessNumber=parseInt(prompt("I guess a number.What is number?:"));
let guessNum=0
while(true){
    
    if(guessNumber<targetNum){
       guessNumber=parseInt(prompt("too low.Please guess again:"));
       guessNum++
    }
    else if(guessNumber>targetNum){
        guessNumber=parseInt(prompt("too high please guess again:"));
        guessNum++
    }
    else{
        if(guessNum==0){
            guessNum++
        }
        break
    }
}
console.log(`Congrats you guess my number with ${guessNum} guess`);

