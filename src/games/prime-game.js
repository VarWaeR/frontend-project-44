import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getCorrectAnswer = (arr) => {
  let correctAnswer = '';
  switch (arr.length) {
    case 2:
      correctAnswer = 'yes';
      break;
    default:
      correctAnswer = 'no';
  }
  return correctAnswer;
};

// game logic
const getRoundData = () => {
  const start = 1;
  const end = 30;
  const randomNumber1 = getRandomNumber(start, end);
  const checkArr = [];
  const question = (`${randomNumber1}`);
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      checkArr.push(i);
    }
  }
  const correctAnswer = getCorrectAnswer(checkArr);
  return [question, correctAnswer];
};

const runPrimeGame = () => gameEngine(getRoundData, gameRule);

export default runPrimeGame;
