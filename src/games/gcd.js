import { getRandomInt, getGcdTwoNumbers } from '../utils.js';
import gameRunner from '../index.js';

const runGcdGame = () => {
  const startQuestion = 'Find the greatest common divisor of given numbers.';
  const gameRounds = 3;
  const arrQuestionCurrectAnswer = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const firstNumber = getRandomInt(1, 100);
    const secondNumber = getRandomInt(1, 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = getGcdTwoNumbers(firstNumber, secondNumber);
    arrQuestionCurrectAnswer[i] = [question, answer];
  }
  gameRunner(startQuestion, arrQuestionCurrectAnswer, gameRounds);
};

export default runGcdGame;
