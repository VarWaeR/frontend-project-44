import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getRoundData = () => {
  const start = 1;
  const end = 50;
  const randomNumber1 = getRandomNumber(start, end);
  const randomNumber2 = getRandomNumber(start, end);
  let correctAnswer = 0;
  const question = (`${randomNumber1} ${randomNumber2}`);
  const rounds = Math.min(randomNumber1, randomNumber2);
  for (let i = 1; i <= rounds; i += 1) {
    if (randomNumber1 % i === 0 && randomNumber2 % i === 0) {
      correctAnswer = String(i);
    }
  }
  return [question, correctAnswer];
};

const runGcdGame = () => gameEngine(getRoundData, gameRule);

export default runGcdGame;
