import readlineSync from 'readline-sync';

// creating game engine
const gameEngine = (getRoundData, gameRule) => {
// greeting and naming
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  // engine
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getRoundData();
    const playerAnswer = readlineSync.question(`Question: ${question} `);
    if (correctAnswer !== playerAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
