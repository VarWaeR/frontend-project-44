import getRandomNumber from '../modules/random-number.js';
import gameEngine from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRoundData = () => {
  const start = 1;
  const end = 20;
  const number = getRandomNumber(start, end);
  const question = (`${number}`);
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};
const runEvenGame = () => gameEngine(getRoundData, gameRule);

export default runEvenGame;
