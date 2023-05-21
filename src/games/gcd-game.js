import { gameEngine, randomNumber } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

// game logic
const logic = () => {
  const randomNumber1 = randomNumber(50);
  const randomNumber2 = randomNumber(50);
  let correctAnswer = 0;
  const question = (`${randomNumber1} ${randomNumber2}`);
  const rounds = Math.min(randomNumber1, randomNumber2);
  // protect if any of numbers = 0
  if (randomNumber1 === 0 || randomNumber2 === 0) {
    correctAnswer = String(correctAnswer);
    return [question, correctAnswer];
  }
  for (let i = 1; i <= rounds; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      correctAnswer = String(i);
    }
  }
  return [question, correctAnswer];
};

const gcdGame = () => gameEngine(logic, rules);

export default gcdGame;
