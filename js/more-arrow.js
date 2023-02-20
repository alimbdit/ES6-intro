const add = (first, second) => first + second;
const fullName = (firstName, secondName) => firstName + ' ' + secondName;

const multiply = (first, second) => first * second;

const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

const pi = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multiple arrow function
// in multiply arrow function for returning something must use return 
const resultIt = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiply = firstSum * secondSum;
    const result = multiply / 2;
    return result;
}