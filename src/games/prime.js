import { getRandomInt } from '../utils.js';
import gameRunner from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const runPrimeGame = () => {
  const startQuestion = 'Answer "yes" if the number is prime. Otherwise answer "no".';
  const gameRounds = 3;
  const arrQuestionCurrectAnswer = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const answer = isPrime(question);
    arrQuestionCurrectAnswer[i] = [question, answer];
  }
  gameRunner(startQuestion, arrQuestionCurrectAnswer, gameRounds);
};

export default runPrimeGame;
