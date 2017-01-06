'use strict';

// repeated language used in questions, stored as variables
var yesOrNo = 'Yes or no: ';
var userAnswered = 'User answered ';
var incorrect = 'Incorrect.';
var correct = 'Correct!';
var tooMany = 'That\'s too many! ';
var tooFew = 'That\'s too few! ';
var invalidAnswer = 'Your answer was not valid, please try again.';
var quizInput;

// Quiz questions
var quizQuestions = ['Are Puffy and Spencer are from Yakima?','Does Spencer prefer kibble?','Puffy is a Norwegian Forest cat?','Spencer is teaching himself English?','Are Puffy and Spencer are friends?','How many cats were living in the house Puffy and Spencer were rescued from?','What colors are Puffy and Spencer? Name one.','The developer is capricious and likes to use Math.random() to determine how many treats the kitties will receive each day. How many do you think they\'ll get today?'];

// Quiz answers to be displayed later
var quizAnswers = ['They were rescued from a benevolent hoarding situation in Yakima and brought to a shelter in Seattle, when I adopted them.','Spencer strongly prefers canned food.','Puffy is a Maine Coon cat.','Spencer seems to be learning English. He yells \"HELLO!\" with alarming frequency and volume.','They\'re best described as frenemies.','They were rescued from a house with 26 cats.','They\'re both black, brown, and grey or gray.','Number of treats they\'ll receive today: '];
var quizAnswer7 = ['black','grey','gray','brown'];
var quizAnswer8 = Math.floor(Math.random() * 20) + 1;

// Count correct answers
var quizAns = [['y', 'yes'],['n', 'no'],['n', 'no'],['y', 'yes'],['n', 'no']];
var possibleAnswers = ['y', 'yes', 'n', 'no'];
var countCorrect = 0;
var valid = false;

// Ask user their name and if they are ready to take the quiz
var userName = prompt('What is your name?');
var answer1 = confirm(userName + ', are you ready to take a quiz about the developer\'s cats, Puffy and Spencer?');

if (answer1) {
  //function to validate whether the user entered a usable answer
  function validAnswer() {
    for (var vindex = 0; vindex < possibleAnswers.length; vindex++) {
      if (quizInput === possibleAnswers[vindex]) {
        valid = true;
        console.log('Validated answer.');
      }
    }
  }
  //create function to call quiz questions and evaluate user answers
  function quiz() {
    quizInput = prompt(yesOrNo + quizQuestions[count]).toLowerCase();
    console.log(userAnswered + quizInput);
    validAnswer();
    if (quizInput === quizAns[count][0] || quizInput === quizAns[count][1]) {
      alert(correct);
      countCorrect++;
    } else if (valid === false){
      alert(invalidAnswer);
      count--;
    } else {
      alert(incorrect);
    }
    valid = false;
    document.write('<p class="question">Question ' + (count + 1) + ': ' + quizQuestions[count] + '<br />Answer: ' + quizAnswers[count] + '<br />(Your answer: ' + quizInput + ')</p>');
  }

  //calls the guessing quiz function a set number of times
  for (var count = 0; count < 5; count++) {
    quiz();
  }
  function guessNum() {
    var quizInput = parseInt(prompt(quizQuestions[5]));
    console.log(userAnswered + quizInput);
    if (quizInput === 26) {
      alert(correct);
      countCorrect++;
      index6 = 5;
    }
    else {
      if (quizInput < 26) {
        alert(tooFew + 'Attempts remaining: ' + (3 - index6));
      }
      else if (quizInput > 26) {
        alert(tooMany + 'Attempts remaining: ' + (3 - index6));
      }
      else {
        alert('Please type a number.');
      }
    }
  }
    // Quiz question 6
  for (var index6 = 0; index6 < 4; index6++){
    guessNum();
  }
  document.write('<p class="question">Question 6: ' + quizQuestions[5] + '<br />Answer: ' + quizAnswers[5] + '<br />(Your answer: ' + quizInput + ')</p>');

  function multiAnswer() {
    var quizInput = prompt(quizQuestions[6]).toLowerCase();
    console.log(userAnswered + quizInput);
    //Inner for loop and variables that compares quizInput7 with quizAnswer7 array items
    var subIndex7;
    var isCorrect = false;
    for (subIndex7 = 0; subIndex7 < 4; subIndex7++) {
      if (quizInput === quizAnswer7[subIndex7]) {
        console.log(correct);
        isCorrect = true;
      }
    }
    // If statement that breaks outer for loop if quizInput7 equals quizAnswer7
    if (isCorrect === true) {
      countCorrect++;
      console.log(countCorrect);
      alert(correct);
      index7 = 6;
    } else {
      alert(incorrect + ' Please try again!');
    }
  }
  //Quiz question 7; outer for loop permits users 6 incorrect tries
  for (var index7 = 0; index7 < 6; index7++) {
    multiAnswer();
  }
  document.write('<p class="question">Question 7: ' + quizQuestions[6] + '<br />Answer: ' + quizAnswers[6] + '<br />(Your answer: ' + quizInput + ')</p>');

  //Quiz question 8
  function treats() {
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
    document.write('<p class="question">Question 8: ' + quizQuestions[7] + '<br />Answer: ' + quizAnswers[7] + quizAnswer8 + '<br />(Your answer: ' + quizInput8 + ')</p>');
  }

  treats();
  document.write('<p class="intro">Now that you\'ve taken the quiz, here\'s your score and some more information about these two wonderful cats.</p><p id="score question">Your score: ' + countCorrect + '/8</p></section>');
}
else {
  console.log('Sadly,' + userName + ' is not ready for a quiz on cats.');
  alert('Ok, no problem.');
  // Show sorry message to user in HTML
  document.write('<p class="intro">Sorry you didn\'t feel prepared to take the quiz. Refresh the page if you change your mind.');
}
