// create secret number
var secretNum = 4;

// ask user for guess
var guess = Number(prompt("Guess a number"));

// check guess
if(guess === secretNum){
    alert("YOU GOT IT RIGHT");
}
// otherwise check if higher
else if(guess>secretNum){
    alert("TOO HIGH");
}
else{
    alert("TOO LOW GUESS AGAIN");
}