import { getRandomInt } from '../utils.js';
import gameRunner from '../index.js';

const runEvenGame = () => {
  const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameRounds = 3;
  const arrQuestionCurrectAnswer = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    arrQuestionCurrectAnswer[i] = [question, answer];
  }
  gameRunner(startQuestion, arrQuestionCurrectAnswer, gameRounds);
};

export default runEvenGame;
