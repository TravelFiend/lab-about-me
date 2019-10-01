// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { isYes } from '../src/is-yes/functions.js';

const test = QUnit.test;

test('Did the user answer "no" on Question 1?', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const userAnswer = 'no';

    //Act 
    // Call the function you're testing and set the result to a const

    const userAnswerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(userAnswerIsCorrect, false);
});

test('Did the user answer "yes" on Question 2?', function (assert) {
    //Arrange
    // Set up your parameters and expectations

    const userAnswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const

    const userAnswerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(userAnswerIsCorrect, true);
});

test('Did the user answer "yes" on Question 3?', function (assert) {
    //Arrange
    // Set up your parameters and expectations

    const userAnswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const

    const userAnswerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result

    assert.equal(userAnswerIsCorrect, true);
});