document.getElementById('one');
document.getElementById('two');
document.getElementById('three');
document.getElementById('four');

var username = prompt("What's your name?").toUpperCase();
  console.log("username: " + username);
var count = 0;

function ques1() {
  var question1 = prompt("Did I grow up in Hawaii?");
  console.log('Question 1 User Response: ' + question1);
  if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
    one.innerHTML = "Nope, I grew up in the U.K.";
  } else {
    one.innerHTML = "Correct!";
    count++;
  }
}

function ques2() {
  var question2 = prompt("Do I speak Mandarin?");
  console.log('Question 2 Response: ' + question2);
  if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
    two.innerHTML = "I wish! Unfortunately I don't speak Mandarin.";
  } else {
	 two.innerHTML ="Correct!";
	 count++;
  }
}

function ques3() {
  var question3 = prompt("Do I own a motorcycle?");
  console.log('Question 3 Response: ' + question3);
  if (question3.toUpperCase() === 'YES' || question3.toUpperCase() ===  'Y') {
	 three.innerHTML = "Incorrect. I do have a trusty mountain bike however.";
  } else {
	 three.innerHTML = "Correct!";
	 count++;
  }
}

ques1();
ques2();
ques3();

four.innerHTML = "Congratulations, " + username + ", you answered " + count + " questions out of 3 correctly.";

