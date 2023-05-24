import { gameEngine, randomNumber } from '../index.js';

const gameRule = 'What number is missing in the progression?';

// game logic
const logic = () => {
  const missedItem = randomNumber(10);
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
  // logic 3 - every step +4
  if (numLogic === 2) {
    for (let i = 0; i < 10; i += 1) {
      startItem += 4;
      arr.push(startItem);
    }
  }
  const correctAnswer = String(arr[missedItem]);
  arr[missedItem] = '..';
  const question = arr.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => gameEngine(logic, gameRule);

export default runProgressionGame;
