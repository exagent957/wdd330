const log = (a) => console.log(`Result: ${a}`);

// square = (x) => x * x;
// console.log(square.length);

// const marc = { name: "Marc" };
// const jacki = { name: "Jacki" };
// function sayHello(greeting = "Hello") {
//   return `${greeting}, my name is ${this.name}`;
// }
// console.log(sayHello.call(marc));
// console.log(sayHello.call(jacki));
// console.log(sayHello.call(marc, "Good day"));

// console.log(square.call(null, 4));
// console.log(square.apply(null, [4]));

// square.description = "Squares a number that is provided as an argument";
// console.log(square);
// console.log(square.description);

// function square(x) {
//   square.cache = square.cache || {};
//   if (!square.cache[x]) {
//     square.cache[x] = x * x;
//   }
//   return square.cache[x];
// }
// console.log(square(3));
// console.log(square(-11));

// (function () {
//   const temp = "World";
//   console.log(`Hello ${temp}`);
// })(); //notice the () at end which invokes function immediately

// let a = 1;
// let b = 2;
// (() => {
//   const temp = a;
//   a = b;
//   b = temp;
// })();
// log(a);
// log(temp);

// let [a, b] = [1, 2];
// [a, b] = [b, a];
// log(a);
// log(b);

// (function () {
//   const name = "Peter Parker"; // This might be obtained from a cookie in reality
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const date = new Date(),
//     today = days[date.getDay()];
//   console.log(`Welcome back ${name}. Today is ${today}`);
// })();

// {
//   const name = "Peter Parker"; // This might be obtained from a cookie in reality
//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const date = new Date(),
//     today = days[date.getDay()];
//   console.log(`Welcome back ${name}. Today is ${today}`);
// }

// function party() {
//   console.log("Wow this is amazing!");
//   party = function () {
//     console.log("Been there, got the T-Shirt");
//   };
// }
// party();
// party();

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const dice = {
//   sides: 6,
//   roll() {
//     return Math.floor(this.sides * Math.random()) + 1;
//   },
// };

// const promise = new Promise((resolve, reject) => {
//   const n = dice.roll();
//   setTimeout(() => {
//     n > 1 ? resolve(n) : reject(n);
//   }, n * 1000);
// });

// const dice = {
//   sides: 6,
//   roll() {
//     return Math.floor(this.sides * Math.random()) + 1;
//   },
// };

// console.log("Before the roll");

// const roll = new Promise((resolve, reject) => {
//   const n = dice.roll();
//   if (n > 1) {
//     setTimeout(() => {
//       resolve(n);
//     }, n * 200);
//   } else {
//     setTimeout(() => reject(n), n * 200);
//   }
// });

// roll
//   .then((result) => console.log(`I rolled a ${result}`))
//   .catch((result) => console.log(`Drat! ... I rolled a ${result}`));

// console.log("After the roll");

// function random(a, b = 1) {
//   // if only 1 argument is provided, we need to swap the values of a and b
//   if (b === 1) {
//     [a, b] = [b, a];
//   }
//   return Math.floor((b - a + 1) * Math.random()) + a;
// }

// log(random(6));

// function random(a, b, callback) {
//   if (b === undefined) (b = a), (a = 1); // if only one argument is supplied, assume the lower limit is 1
//   const result = Math.floor((b - a + 1) * Math.random()) + a;
//   if (callback) {
//     result = callback(result);
//   }
//   return result;
// }

// function square(n) {
//   return n * n;
// }

// random(1, 10, square);

// function returnHello() {
//   console.log("returnHello() called");
//   return function () {
//     console.log("Hello World!");
//   };
// }

// returnHello();

// function outer() {
//   const outside = "Outside!";
//   function inner() {
//     const inside = "Inside!";
//     console.log(outside);
//     console.log(inside);
//   }
//   console.log(outside);
//   inner();
// }
// outer();

// function outer() {
//   const outside = "Outside!";
//   function inner() {
//     const inside = "Inside!";
//     console.log(outside);
//     console.log(inside);
//   }
//   return inner;
// }
// const closure = outer();
// closure();

// function closure() {
//   const a = 1.8;
//   const b = 32;
//   return (c) => c * a + b;
// }
// const toFahrenheit = closure();
// log(toFahrenheit(30));

// function counter(start) {
//   let i = start;
//   return function () {
//     return i++;
//   };
// }
// const count = counter(1);
// console.log(count());
// console.log(count());
// console.log(count());

// function* fibonacci(a, b) {
//   let [prev, current] = [a, b];
//   while (true) {
//     [prev, current] = [current, prev + current];
//     yield current;
//   }
// }
// const sequence = fibonacci(1, 1);
// console.log(sequence.next());
// console.log(sequence.next());
// console.log(sequence.next());

// for (n of sequence) {
//   // stop the sequence after it reaches 100
//   if (n > 100) break;
//   console.log(n);
// }

// function reverse(string) {
//   return string.split("").reverse().join("");
// }
// const message = "Hello JavaScript";
// console.log(reverse(message));
// console.log(message);

// let number = 42;
// let result = 0;

// function impureAdd(x) {
//   result = number + x;
// }

// impureAdd(10);
// console.log(result);

// const number = 42;

// function pureAdd(x, y) {
//   return x + y;
// }

// result = pureAdd(number, 10);
// console.log(result);

// function square(x) {
//   return x * x;
// }
// function hypotenuse(a, b) {
//   return Math.sqrt(square(a) + square(b));
// }

// //console.log(hypotenuse(3, 4));

// function sum(array, callback) {
//   if (callback) {
//     array = array.map(callback);
//   }
//   return array.reduce((a, b) => a + b);
// }
// result = sum([1, 2, 3]);
// //console.log(result);
// console.log(sum([1, 2, 3], square));

// function variance(array) {
//   return sum(array, square) / array.length - square(mean(array));
// }

// console.log(variance([1, 2, 3]));

// function multiplier(x) {
//   return function (y) {
//     return x * y;
//   };
// }
// doubler = multiplier(2);
// console.log(doubler(10));
// twoExp = power(2);
// function power(x) {
//   return function (power) {
//     return Math.pow(x, power);
//   };
// }
// console.log(twoExp(5));

// function multiplier(x, y) {
//   return x * y;
// }
// function multiplier(x, y) {
//   if (y === undefined) {
//     return function (z) {
//       return x * z;
//     };
//   } else {
//     return x * y;
//   }
// }
