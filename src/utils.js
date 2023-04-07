const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOper = () => {
  const arrOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * arrOperators.length);
  return arrOperators[randomNumber];
};

const getGcdTwoNumbers = (numberOne, numberTwo) => {
  let x = Math.abs(numberOne);
  let y = Math.abs(numberTwo);
  while (y) {
    const buff = y;
    y = x % y;
    x = buff;
  }
  return x;
};

export { getRandomInt, getRandomOper, getGcdTwoNumbers };
