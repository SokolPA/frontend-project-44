const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRandomOper = () => {
  const arrOperators = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * arrOperators.length);
  return arrOperators[randomNumber];
};

export { getRandomInt, getRandomOper };
