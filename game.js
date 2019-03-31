alert("HELOO!");
var number = 4;
var guess = Number(prompt("guess a no. betw 1 - 10"));

if(guess === number){
	alert("YOU GOT IT RIGHT!!");
}

else if(guess > number){
	alert("TOO HIGH");
}
else{
	alert("TOO LOW!!");
}