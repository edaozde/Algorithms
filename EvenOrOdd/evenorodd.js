/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(evenOrOdd(10));


module.exports = evenOrOdd;

// const evenOrOdd = (number) => number % 2 ? "Odd" : 'Even'; 
