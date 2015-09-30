
var count = 0
var question1 = prompt("Did I grow up in Hawaii?").toUpperCase();


if (question1 === 'yes') {
	alert("Nope, I grew up in the U.K.");
}
else {
	alert("Correct!");
	count++;
}


var question2 = prompt("Do I speak Mandarin?").toUpperCase();

if (question2 === 'yes') {

	alert("I wish! Unfortunately I don't speak Mandarin.")
}
else {
	alert("Correct");
	count++;
}


var question3 = prompt("Do I own a motorcycle?").toUpperCase();

if (question3 === 'yes') {
	alert("Incorrect. I do have a trusty mountain bike however.")
}
else {
	alert("Correct");
	count++;
}

//comments rock

console.log('Question 1 repsonse: ' + question1);

console.log('Question 2 response: ' + question2);


console.log('Question 3 response: ' + question3);

