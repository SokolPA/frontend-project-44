import readlineSync from 'readline-sync';
import { getRandomInt } from '../utils.js';

const roundNumbers = 3;

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < roundNumbers; i += 1) {
    const questionNumber = getRandomInt(1, 100);
    console.log(`Question: ${questionNumber}`);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;
