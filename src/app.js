import { isYes } from './is-yes/functions.js';

const takeTheQuiz = document.getElementById('take-the-quiz');

takeTheQuiz.onclick = () => {
  alert('Hey! Welcome to my quiz! Whatever.');

  const userAnswer1 = prompt('Is Joseph\'s number 1 favorite baked good a chocolate chip cookie?');
  const sanitizedAnswer1 = userAnswer1.toLowerCase().trim();
  const userIsCorrect1 = isYes(sanitizedAnswer1);

  if(sanitizedAnswer1 === 'no') {
    alert('Affirmative!');
  } else {
    alert('Oh no!');
  }

  const userAnswer2 = prompt('Is Joseph\'s mom his favorite person in the world?');
  const sanitizedAnswer2 = userAnswer2.toLowerCase().trim();
  const userIsCorrect2 = isYes(sanitizedAnswer2);
  

  if (sanitizedAnswer2 === 'yes') {
    alert('Affirmative!');
  } else {
    alert('Oh no!');
  }

  const userAnswer3 = prompt('Does Joseph live in Portland, OR?');
  const sanitizedAnswer3 = userAnswer3.toLowerCase().trim();
  const userIsCorrect3 = isYes(sanitizedAnswer3);

  if (sanitizedAnswer3 === 'yes') {
    alert('Affirmative!');
  } else {
    alert('Oh no!');
  }

const userAnswer4 = prompt('Was Joseph the largest baby born at Forsyth Medical Center in 1991?');
const sanitizedAnswer4 = userAnswer4.toLowerCase().trim();
const userIsCorrect4 = isYes(sanitizedAnswer4);

  if (sanitizedAnswer4 === 'no') {
    alert('Affirmative!');
  } else {
    alert('Oh no!');
  }

};







