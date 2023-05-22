import { gameEngine, randomNumber } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// game logic
const logic = () => {
  const randomNumber1 = randomNumber(30) + 1;
  let correctAnswer = '';
  const checkArr = [];
  const question = (`${randomNumber1} `);
  for (let i = 1; i <= randomNumber1; i += 1) {
    if (randomNumber1 % i === 0) {
      checkArr.push(i);
    }
  }
  if (checkArr.length === 2) {
    correctAnswer = 'yes';
  }
  if (checkArr.length !== 2) {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
};

const primeGame = () => gameEngine(logic, rules);

export default primeGame;
