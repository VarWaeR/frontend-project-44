import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'What number is missing in the progression?';

// game logic
const getRoundData = () => {
  const startProgression = 1;
  const endProgression = 20;
  const endMissedItem = 10;
  const missedItem = getRandomNumber(startProgression, endMissedItem);
  let startItem = getRandomNumber(startProgression, endProgression);
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

const runProgressionGame = () => gameEngine(getRoundData, gameRule);

export default runProgressionGame;
