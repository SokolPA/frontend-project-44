import readlineSync from 'readline-sync';

const gameRunner = (startQuestion, questionAnswer, roundNumbers) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(startQuestion);
  for (let i = 0; i < roundNumbers; i += 1) {
    console.log(`Question: ${questionAnswer[i][0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(questionAnswer[i][1])) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAnswer[i][1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRunner;
