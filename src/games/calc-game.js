import { gameEngine, randomNumber } from '../index.js';

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
  const randomingOperation = randomNumber(1);
  if (randomingOperation === 1) {
    result = plus;
  }
  if (randomingOperation === 0) {
    result = minus;
  }
  return result;
};

const rules = 'What is the result of the expression?';

// game logic
const logic = () => {
  const randomNumber1 = randomNumber(20);
  const randomNumber2 = randomNumber(20);
  const operation = randomOperation();
  const question = (`${randomNumber1} ${operation} ${randomNumber2}`);
  const correctAnswer = String(calculateResult(randomNumber1, randomNumber2, operation));
  return [question, correctAnswer];
};

const runCalcGame = () => gameEngine(logic, rules);

export default runCalcGame;
