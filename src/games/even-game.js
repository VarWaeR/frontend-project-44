import readlineSync from 'readline-sync';

// evenGame
const evenGame = () => {
  // random number
  const randomNumber = (max) => Math.floor(Math.random() * max);
  // getting name
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const name = getName();
  console.log(`Hello, ${name}!`);
  // rules for user
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(20);
    console.log(`Question: ${number}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    // checking
    const checkYes = (number % 2 === 0) && (usersAnswer === 'yes');
    const checkNo = (number % 2 !== 0) && (usersAnswer === 'no');
    let correctAnswer = '';
    if (checkYes === true || checkNo === true) {
      console.log('Correct!');
    }
    if (checkYes === false && checkNo === false) {
      if (number % 2 === 0) {
        correctAnswer = 'yes';
      }
      if (number % 2 !== 0) {
        correctAnswer = 'no';
      }
      const errorMessage = `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`;
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenGame;
