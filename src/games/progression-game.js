import gameEngine from '../index.js';
import getRandomNumber from '../modules/random-number.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (step, startItem) => {
  const arr = [];
  let firstItem = startItem;
  for (let i = 0; i < 10; i += 1) {
    firstItem += step;
    arr.push(firstItem);
  }
  return arr;
};

// game logic
const getRoundData = () => {
  const start = 1;
  const startStep = 2;
  const endProgressionNumbers = 20;
  const endMissedItem = 9;
  const endStepNumbers = 4;
  const missedItem = getRandomNumber(start, endMissedItem);
  const startItem = getRandomNumber(start, endProgressionNumbers);
  const step = getRandomNumber(startStep, endStepNumbers);
  const progression = getProgression(step, startItem);
  const correctAnswer = String(progression[missedItem]);
  progression[missedItem] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => gameEngine(getRoundData, gameRule);

export default runProgressionGame;
