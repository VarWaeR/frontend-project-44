import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'What number is missing in the progression?';

const getNumLogic = () => {
  const arrLogic = [1, 2, 3];
  const result = Math.floor(Math.random() * arrLogic.length);
  return result;
};

const getProgression = (numLogic, startItem) => {
  const arr = [];
  let firstItem = startItem;
  switch (numLogic) {
    // every step + 2
    case 0:
      for (let i = 0; i < 10; i += 1) {
        firstItem += 2;
        arr.push(firstItem);
      }
      break;
    // every step +3
    case 1:
      for (let i = 0; i < 10; i += 1) {
        firstItem += 3;
        arr.push(firstItem);
      }
      break;
    // every step +4
    case 2:
      for (let i = 0; i < 10; i += 1) {
        firstItem += 4;
        arr.push(firstItem);
      }
      break;
    default:
      console.log(`Error. numLogic = ${numLogic}`);
  }
  return arr;
};

// game logic
const getRoundData = () => {
  const startProgression = 1;
  const endProgression = 20;
  const endMissedItem = 9;
  const missedItem = getRandomNumber(startProgression, endMissedItem);
  const startItem = getRandomNumber(startProgression, endProgression);
  const numLogic = getNumLogic();
  const progression = getProgression(numLogic, startItem);
  const correctAnswer = String(progression[missedItem]);
  progression[missedItem] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => gameEngine(getRoundData, gameRule);

export default runProgressionGame;
