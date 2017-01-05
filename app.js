'use strict';

// repeated language used in questions, stored as variables
var yesOrNo = 'Yes or no: ';
var userAnswered = 'User answered ';
var incorrect = 'Incorrect.';
var correct = 'Correct!';
var tooMany = 'That\'s too many! ';
var tooFew = 'That\'s too few! ';

// Quiz questions
var quizQuestions = ['Are Puffy and Spencer are from Yakima?','Does Spencer prefer kibble?','Puffy is a Norwegian Forest cat?','Spencer is teaching himself English?','Are Puffy and Spencer are friends?','How many cats were living in the house Puffy and Spencer were rescued from?','What colors are Puffy and Spencer? Name one.','The developer is capricious and likes to use Math.random() to determine how many treats the kitties will receive each day. How many do you think they\'ll get today?'];

// Quiz answers to be displayed later
var quizAnswers = ['They were rescued from a benevolent hoarding situation in Yakima and brought to a shelter in Seattle, when I adopted them.','Spencer strongly prefers canned food.','Puffy is a Maine Coon cat.','Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.','They\'re best described as frenemies.','They were rescued from a house with 26 cats.','They\'re both black, brown, and grey or gray.','Number of treats they\'ll receive today: '];
var quizAnswer7 = ['black','grey','gray','brown'];
var quizAnswer8 = Math.round(Math.random() * 20);

// Count correct answers
var countCorrect = 0;

var userName = prompt('What is your name?');

// ask user if they are ready to take the quiz
var answer1 = confirm(userName + ', are you ready to take a quiz about the developer\'s cats, Puffy and Spencer?');

if (answer1) {
  console.log(userName + ' is ready to take a quiz about cats!');
  alert('Great, get ready to answer eight quick questions.');
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
    console.log(countCorrect);
  }
  else {
    alert(incorrect);
    console.log(countCorrect);
  }

  // Quiz question 4
  var quizInput4 = prompt(yesOrNo + quizQuestions[3]).toUpperCase();
  console.log(userAnswered + quizInput4);
  if (quizInput4 === 'Y' || quizInput4 === 'YES') {
    alert(correct);
    countCorrect++;
    console.log(countCorrect);
  }
  else {
    alert(incorrect);
    console.log(countCorrect);
  }

  // Quiz question 5
  var quizInput5 = prompt(yesOrNo + quizQuestions[4]).toUpperCase();
  console.log(userAnswered + quizInput5);
  if (quizInput5 === 'N' || quizInput5 === 'NO') {
    alert(correct);
    countCorrect++;
    console.log(countCorrect);
  }
  else {
    alert(incorrect);
    console.log(countCorrect);
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
      console.log(countCorrect);
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

  //Quiz question 7; outer for loop permits users 6 incorrect tries
  var index7;
  for (index7 = 0; index7 < 6; index7++) {
    var quizInput7 = prompt(quizQuestions[6]).toLowerCase();
    console.log(userAnswered + quizInput7);
    //Inner for loop and variables that compares quizInput7 with quizAnswer7 array items
    var subIndex7;
    var isCorrect = false;
    for (subIndex7 = 0; subIndex7 < 4; subIndex7++) {
      console.log('inner for loop ' + quizAnswer7[subIndex7]);
      if (quizInput7 === quizAnswer7[subIndex7]) {
        console.log(correct);
        isCorrect = true;
      }
    }
    // If statement that breaks outer for loop if quizInput7 equals quizAnswer7
    if (isCorrect === true) {
      countCorrect++;
      console.log(countCorrect);
      alert(correct);
      break;
    }
  }

  // Quiz question 8
  var quizInput8 = parseInt(prompt(quizQuestions[7]));
  console.log(userAnswered + quizInput8);
  if (quizInput8 === quizAnswer8) {
    alert(correct);
    countCorrect++;
    console.log(countCorrect);
  }
  else {
    alert(incorrect);
    console.log(countCorrect);
  }

  // Show results to user in HTML
  document.write('<p class="intro">Now that you\'ve taken the quiz, here\'s your score and some more information about these two wonderful cats.</p><p id="score question">Your score: ' + countCorrect + '/8</p></section>');
  document.write('<p class="question">Question 1: ' + quizQuestions[0] + '<br />Answer: ' + quizAnswers[0] + '<br />(Your answer: ' + quizInput1 + ')</p>');
  document.write('<p class="question">Question 2: ' + quizQuestions[1] + '<br />Answer: ' + quizAnswers[1] + '<br />(Your answer: ' + quizInput2 + ')</p>');
  document.write('<p class="question">Question 3: ' + quizQuestions[2] + '<br />Answer: ' + quizAnswers[2] + '<br />(Your answer: ' + quizInput3 + ')</p>');
  document.write('<p class="question">Question 4: ' + quizQuestions[3] + '<br />Answer: ' + quizAnswers[3] + '<br />(Your answer: ' + quizInput4 + ')</p>');
  document.write('<p class="question">Question 5: ' + quizQuestions[4] + '<br />Answer: ' + quizAnswers[4] + '<br />(Your answer: ' + quizInput5 + ')</p>');
  document.write('<p class="question">Question 6: ' + quizQuestions[5] + '<br />Answer: ' + quizAnswers[5] + '<br />(Your answer: ' + quizInput6 + ')</p>');
  document.write('<p class="question">Question 7: ' + quizQuestions[6] + '<br />Answer: ' + quizAnswers[6] + '<br />(Your answer: ' + quizInput7 + ')</p>');
  document.write('<p class="question">Question 8: ' + quizQuestions[7] + '<br />Answer: ' + quizAnswers[7] + quizAnswer8 + '<br />(Your answer: ' + quizInput8 + ')</p>');
}
else {
  console.log('Sadly,' + userName + ' is not ready for a quiz on cats.');
  alert('Ok, no problem.');
  // Show sorry message to user in HTML
  document.write('<p class="intro">Sorry you didn\'t feel prepared to take the quiz. Refresh the page if you change your mind.');
}
