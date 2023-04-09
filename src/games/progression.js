import { getRandomInt } from '../utils.js';
import gameRunner from '../index.js';

const getProgression = () => {
  const numberMemProgression = getRandomInt(5, 15);
  const deltaProgression = getRandomInt(1, 10);
  let firstNumProgression = getRandomInt(1, 50);
  const resultProg = [];
  for (let i = 0; i < numberMemProgression; i += 1) {
    resultProg[i] = firstNumProgression;
    firstNumProgression += deltaProgression;
  }
  return resultProg;
};

const runProgGame = () => {
  const startQuestion = 'What number is missing in the progression?';
  const gameRounds = 3;
  const arrQuestionCurrectAnswer = [];
  for (let i = 0; i < gameRounds; i += 1) {
    const progression = getProgression();
    const hiddenNum = getRandomInt(1, progression.length);
    const answer = progression[hiddenNum - 1];
    progression[hiddenNum - 1] = '..';
    const progressionStr = progression.join(' ');
    arrQuestionCurrectAnswer[i] = [progressionStr, answer];
  }
  gameRunner(startQuestion, arrQuestionCurrectAnswer, gameRounds);
};

export default runProgGame;
