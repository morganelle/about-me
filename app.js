'use strict';

var userName = prompt('What is your name?');

// ask user if they are ready to take the quiz
var answer1 = confirm(userName + ', are you ready to take a quiz about the developer\'s cats, Puffy and Spencer?');

if (answer1) {
  console.log(userName + ' is ready to take a quiz about cats!');
  alert('Great, get ready to answer seven quick questions.');
}
else {
  console.log('Sadly,' + userName + ' is not ready for a quiz on cats.');
  alert('That\'s too bad!');
}

// repeated language used in questions, stored as variables
var yesOrNo = 'Y or N: ';
var userAnswered = userName + ' answered ';
var incorrect = 'Incorrect. ';
var correct = 'Correct! ';
var tooMany = 'That\'s too many! ';
var tooFew = 'That\'s too few! ';

// Quiz questions
var quizQuestions = ['Are Puffy and Spencer are from Yakima?','Does Spencer prefer kibble?','Puffy is a Norwegian Forest cat?','Spencer is teaching himself English?','Are Puffy and Spencer are friends?','How many cats were living in the house Puffy and Spencer were rescued from?','What colors are Puffy and Spencer?'];

// Quiz answers to be displayed later
var quizAnswers = ['They were rescued from a benevolent hoarding situation in Yakima and brought to a shelter in Seattle, when I adopted them.','Spencer strongly prefers canned food.','Puffy is a Maine Coon cat.','Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.','They\'re best described as frenemies.','They were rescued from a house with 26 cats.',['black','grey','brown']];
var quizAnswer7 = ['black','grey','brown'];

// Count correct answers
var countCorrect = 0;

/// Quiz question 1
var quizInput1 = prompt(yesOrNo + quizQuestions[0]).toUpperCase();
console.log(userAnswered + quizInput1);
if (quizInput1 === 'Y' || quizInput1 === 'YES') {
  alert(correct);
  countCorrect++;
  console.log(countCorrect);
}
else {
  alert(incorrect);
  console.log(countCorrect);
}

// Quiz question 2
var quizInput2 = prompt(yesOrNo + quizQuestions[1]).toUpperCase();
console.log(userAnswered + quizInput2);
if (quizInput2 === 'N' || quizInput2 === 'NO') {
  alert(correct);
  countCorrect++;
  console.log(countCorrect);
}
else {
  alert(incorrect);
  console.log(countCorrect);
}

// Quiz question 3
var quizInput3 = prompt(yesOrNo + quizQuestions[2]).toUpperCase();
console.log(userAnswered + quizInput3);
if (quizInput3 === 'N' || quizInput3 === 'NO') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

// Quiz question 4
var quizInput4 = prompt(yesOrNo + quizQuestions[3]).toUpperCase();
console.log(userAnswered + quizInput4);
if (quizInput4 === 'Y' || quizInput4 === 'YES') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

// Quiz question 5
var quizInput5 = prompt(yesOrNo + quizQuestions[4]).toUpperCase();
console.log(userAnswered + quizInput5);
if (quizInput5 === 'N' || quizInput5 === 'NO') {
  alert(correct);
  countCorrect++;
}
else {
  alert(incorrect);
}

// Quiz question 6
var index6;
for (index6 = 0; index6 < 4; index6++) {
  var quizInput6 = parseInt(prompt(quizQuestions[5]));
  console.log(userAnswered + quizInput6);
  if (quizInput6 === 26) {
    alert(correct);
    console.log(userAnswered + quizInput6);
    countCorrect++;
    break;
  }
  else {
    if (quizInput6 < 26) {
      alert(tooFew + 'Attempts remaining: ' + (3 - index6));
    }
    else if (quizInput6 > 26) {
      alert(tooMany + 'Attempts remaining: ' + (3 - index6));
    }
    else {
      alert('Please type a number.');
    }
  }
};

//Quiz question 7
var index7;
for (index7 = 0; index7 < 6; index7++) {
  var quizInput7 = prompt(quizQuestions[6]).toLowerCase();
  console.log(userAnswered + quizInput7);
  var subIndex7;
  var isCorrect = false;
  for (subIndex7 = 0; subIndex7 < 3; subIndex7++) {
    console.log('inner for loop ' + quizAnswer7[subIndex7]);
    if (quizInput7 === quizAnswer7[subIndex7]) {
      console.log(correct);
      isCorrect = true;
    }
  }
  if (isCorrect === true) {
    countCorrect++;
    break;
  }
}

// Show results to user in HTML
document.write('<img src="images/cats5.png" /><p class="intro">Now that you\'ve taken the quiz, here\'s some more information about these two wonderful cats.</p><hr />');
document.write('<p>Question 1: ' + quizQuestions[0] + '<br />Answer: ' + quizAnswers[0] + '<br />(Your answer: ' + quizInput1 + ')</p>');
document.write('<p>Question 2: ' + quizQuestions[1] + '<br />Answer: ' + quizAnswers[1] + '<br />(Your answer: ' + quizInput2 + ')</p>');
document.write('<p>Question 3: ' + quizQuestions[2] + '<br />Answer: ' + quizAnswers[2] + '<br />(Your answer: ' + quizInput3 + ')</p>');
document.write('<p>Question 4: ' + quizQuestions[3] + '<br />Answer: ' + quizAnswers[3] + '<br />(Your answer: ' + quizInput4 + ')</p>');
document.write('<p>Question 5: ' + quizQuestions[4] + '<br />Answer: ' + quizAnswers[4] + '<br />(Your answer: ' + quizInput5 + ')</p>');
document.write('<p>Question 6: ' + quizQuestions[5] + '<br />Answer: ' + quizAnswers[5] + '<br />(Your answer: ' + quizInput6 + ')</p>');
document.write('<p>Question 7: ' + quizQuestions[6] + '<br />Answer: ' + quizAnswers[6] + '<br />(Your answer: ' + quizInput7 + ')</p>');
document.write('<p>Your score: ' + countCorrect + '/7</p>');
