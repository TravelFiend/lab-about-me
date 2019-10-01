import { isYes } from './is-yes/functions.js';

const takeTheQuiz = document.getElementById('take-the-quiz');

takeTheQuiz.onclick = () => {
    const userName = prompt('What should I call you?');

    const userPrepardness = confirm('Nice to meet you ' + userName + ', are you sure your ready to take the quiz?');

    if (userPrepardness) {
        let score = 0;

        const userAnswer1 = prompt('Is Joseph\'s number 1 favorite baked good a chocolate chip cookie, ' + userName + '?');
        const sanitizedAnswer1 = userAnswer1.toLowerCase().trim();
        const userIsCorrect1 = isYes(sanitizedAnswer1);

        if (sanitizedAnswer1 === 'no' || sanitizedAnswer1 === 'n') {
            score ++;
            alert('Affirmative!');
        } else {
            alert('Oh no!');
        }

        const userAnswer2 = prompt('Is Joseph\'s mom his favorite person in the world, ' + userName + '?');
        const sanitizedAnswer2 = userAnswer2.toLowerCase().trim();
        const userIsCorrect2 = isYes(sanitizedAnswer2);


        if (sanitizedAnswer2 === 'yes' || sanitizedAnswer2 ==='y') {
            score ++;
            alert('Affirmative!');
        } else {
            alert('Oh no!');
        }

        const userAnswer3 = prompt('Does Joseph live in Portland, OR, ' + userName + '?');
        const sanitizedAnswer3 = userAnswer3.toLowerCase().trim();
        const userIsCorrect3 = isYes(sanitizedAnswer3);

        if (sanitizedAnswer3 === 'yes' || sanitizedAnswer3 === 'y') {
            score ++;
            alert('Affirmative!');
        } else {
            alert('Oh no!');
        };

        const testComplete = alert('Good work, ' + userName + '!' + ' You\'ve completed the test. Your results will now be printed at the bottom of the page.');

        const scoreSpan = document.getElementById('score');
        scoreSpan.textContent = score;

        const userSpan = document.getElementById('user');
        userSpan.textContent = userName;
    
        document.getElementById("hide-when-complete").style.display = "none";
        document.getElementById("results-section").style.display = "block";

    } else {
      return false;
    }
};







