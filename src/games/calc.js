import { getRandomInt, getRandomOper } from '../utils.js';
import gameRunner from '../index.js';

const runCalcGame = () => {
  const startQuestion = 'What is the result of the expression?';
  const gameRounds = 3;
  const arrQuestionCurrectAnswer = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const firstNumber = getRandomInt(1, 20);
    const secondNumber = getRandomInt(1, 20);
    const operator = getRandomOper();
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    let answer = 0;
    switch (operator) {
      case '-':
        answer = firstNumber - secondNumber;
        break;
      case '+':
        answer = firstNumber + secondNumber;
        break;
      case '*':
        answer = firstNumber * secondNumber;
        break;
       // no default
    }
    arrQuestionCurrectAnswer[i] = [question, answer];
  }
  gameRunner(startQuestion, arrQuestionCurrectAnswer, gameRounds);
};

export default runCalcGame;
