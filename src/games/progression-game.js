import { gameEngine, randomNumber } from '../index.js';

const rules = 'What number is missing in the progression?';

// game logic
const logic = () => {
  let missedItem = randomNumber(10);
  let startItem = randomNumber(20);
  const arr = [];
  // creating 3 different logic
  const arrLogic = [1, 2, 3];
  const numLogic = Math.floor(Math.random() * arrLogic.length);
  // logic 1 - every step +2
  if (numLogic === 0) {
    for (let i = 0; i < 10; i += 1) {
      startItem += 2;
      arr.push(startItem);
    }
  }
  // logic 2 - every step +3
  if (numLogic === 1) {
    for (let i = 0; i < 10; i += 1) {
      startItem += 3;
      arr.push(startItem);
    }
  }
  // logic 3 - first step +3, then -2. Next step +3, then -2. etc.
  if (numLogic === 2) {
    missedItem = randomNumber(5);
    for (let i = 0; i < 5; i += 1) {
      startItem += 3;
      arr.push(startItem);
      startItem -= 2;
      arr.push(startItem);
    }
  }
  const correctAnswer = String(arr[missedItem]);
  arr[missedItem] = '..';
  const question = (`${arr}`);
  return [question, correctAnswer];
};

const progressionGame = () => gameEngine(logic, rules);

export default progressionGame;
