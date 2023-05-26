import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const calculateResult = (randomNumber1, randomNumber2, randomOperation) => {
  let result = 0;
  switch (randomOperation) {
    case '+':
      result = randomNumber1 + randomNumber2;
      break;
    case '-':
      result = randomNumber1 - randomNumber2;
      break;
    default:
      console.log(`Error. randomOperation = ${randomOperation}`);
  }
  return result;
};
const randomOperation = () => {
  const start = 0;
  const end = 1;
  const arrOperations = ['+', '-'];
  const result = arrOperations[getRandomNumber(start, end)];
  return result;
};

const gameRule = 'What is the result of the expression?';

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
