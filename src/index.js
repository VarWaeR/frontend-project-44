import readlineSync from 'readline-sync';

// random number for games
const randomNumber = (max) => Math.floor(Math.random() * max);

// creating game engine
const gameEngine = (logic, rules) => {
// greeting and naming
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  // engine
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = logic();
    const playerAnswer = readlineSync.question(`Question: ${question} `);
    if (correctAnswer !== playerAnswer) {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export { gameEngine, randomNumber };
