import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game logic
const getRoundData = () => {
  const start = 1;
  const end = 30;
  const randomNumber1 = getRandomNumber(start, end);
  let correctAnswer = '';
  const checkArr = [];
  const question = (`${randomNumber1} `);
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      checkArr.push(i);
    }
  }
  if (checkArr.length === 2) {
    correctAnswer = 'yes';
  }
  if (checkArr.length !== 2) {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const runPrimeGame = () => gameEngine(getRoundData, gameRule);

export default runPrimeGame;
