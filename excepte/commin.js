const randomValues = [1, 2, 3, 4, 5];

const randomValue = randomValues.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(randomValue); // Output: 15
