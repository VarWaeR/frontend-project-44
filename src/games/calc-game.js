import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

// calculating correctAnswer
const calculateResult = (randomNumber1, randomNumber2, randomOperation) => {
  let result = 0;
  if (randomOperation === '+') {
    result = randomNumber1 + randomNumber2;
  }
  if (randomOperation === '-') {
    result = randomNumber1 - randomNumber2;
  }
  return result;
};
// random math operation
const randomOperation = () => {
  const plus = '+';
  const minus = '-';
  let result = '';
  const randomingOperation = getRandomNumber(1);
  if (randomingOperation === 1) {
    result = plus;
  }
  if (randomingOperation === 0) {
    result = minus;
  }
  return result;
};

const gameRule = 'What is the result of the expression?';

// game logic
const getRoundData = () => {
  const start = 1;
  const end = 20;
  const randomNumber1 = getRandomNumber(start, end);
  const randomNumber2 = getRandomNumber(start, end);
  const operation = randomOperation();
  const question = (`${randomNumber1} ${operation} ${randomNumber2}`);
  const correctAnswer = String(calculateResult(randomNumber1, randomNumber2, operation));
  return [question, correctAnswer];
};

const runCalcGame = () => gameEngine(getRoundData, gameRule);

export default runCalcGame;
