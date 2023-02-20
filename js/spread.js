const maxValue = Math.max(25, 62, 12, 40);
// console.log(maxValue);

const numbers = [20, 52, 35, 61, 34, 48];


//  it will not work
const maxInArr = Math.max(numbers);

// for this we should use spread operator

const maxInArray = Math.max(...numbers);

// console.log(...numbers);
console.log(maxInArray);

// const numbers2 = numbers;

const numbers2 = [...numbers];
const numbers3 = [40, 33, ...numbers, 25];

numbers2.push(55);
numbers.push(777);

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
