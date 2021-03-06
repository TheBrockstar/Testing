/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return num * 10;
};

const subtractFive = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return num - 5;
};

const areSameLength = (str1, str2) => {

  if (!str1 || !str2) {
    return false;
  }

  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Provided value must be a string.')
  }

  return str1.length === str2.length;
};

const areEqual = (x, y) => {

  if ( !x || !y ) {
    return false;
  }

  return x === y;
};

const lessThanNinety = num => {
  if ( !num ) {
    return false;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if ( !num ) {
    return false;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {  
  if ( !x || !y ) {
    return 0;
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Provided values must be numbers.')
  }

  return x + y;
};

const subtract = (x, y) => {
  if ( !x || !y ) {
    return 0;
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Provided values must be numbers.')
  }

  return x - y;
};

const divide = (x, y) => {
  if ( y === 0 ) {
    throw new Error('Cannot divide by zero.')
  }

  if ( !x || !y ) {
    return 0;
  }

  if ( typeof x !== 'number' || typeof y !== 'number' ) {
    throw new Error('Provided values must be numbers.')
  }

  return x / y;
};

const multiply = (x, y) => {
  if ( !x || !y ) {
    return 0;
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Provided values must be numbers.')
  }

  return x * y;
};

const getRemainder = (x, y) => {
  if ( !x || !y ) {
    return 0;
  }

  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Provided values must be numbers.')
  }

  return x % y;
};

const isEven = num => {
  if (num === 0) {
    return true;
  }

  if ( !num ) {
    return false;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {

  if (num === 0) {
    return false;
  }

  if ( !num ) {
    return false;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return num * num;
};

const cube = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return num * num * num;
};

const raiseToPower = (num, exponent) => {

  if ( !num ) {
    return 0;
  }

  if ( !exponent ) {
    exponent = 1;
  }

  if (typeof num !== 'number' || typeof exponent !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return num ** exponent;
};

const roundNumber = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return Math.round(num);
};

const roundUp = num => {
  if ( !num ) {
    return 0;
  }

  if (typeof num !== 'number') {
    throw new Error('Provided value must be a number.')
  }

  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (!str) {
    return '!';
  }

  if (typeof str !== 'string') {
    throw new Error('Provided value must be a string.')
  }

  return (str += '!');
};

const combineNames = (firstName = "", lastName = "") => {

  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw new Error('Provided value must be a string.')
  }

  if (!firstName || !lastName) {
    return `${firstName}${lastName}`;
  }

  return `${firstName} ${lastName}`;
};

const getGreeting = (name = "") => {
  if (typeof name !== 'string') {
    throw new Error('Provided value must be a string.')
  }

  if (!name) {
    return `Hello!`;
  }

  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
