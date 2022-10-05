//drawing an 8x8 chess board with spaces and # - chapter 2
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);

//Chapter 3 functions
// Your code here. Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
isEven = (n) => {
  if (n === 0) return true; //zero is even
  else if (n === 1) return false; //one is odd
  else if (n < 0) return isEven(-n);
  //turns the negative number into a positive and runs isEven again (recursive)
  else return isEven(n - 2); //keeps calling isEven for any positive number subtracting 2 each time until it gets a 1 or a 0.
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
countBs = (myString) => {
  let count = 0;
  for (i = 0; i < myString.length; i++) {
    if (myString[i] == "B") {
      count += 1;
      console.log(myString[i]);
      console.log(count);
    }
  }
  return count;
};
console.log(countBs("BBC")); //2
//write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
countChar = (myString, ch) => {
  let count = 0;
  for (i = 0; i < myString.length; i++) {
    if (myString[i] == ch) {
      count += 1;
      console.log(myString[i]);
      console.log(count);
    }
  }
  return count;
};
console.log(countChar("kakkerlak", "k")); //4

//ChAPTER  4 objects and arrays
//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end. Should take an optional 3rd parameter indicating step.
//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
function range(start, end, step = start < end ? 1 : -1) {
  //defaults to step of 1 or -1 depending if start is less than or greater than end.
  let array = []; //empty array

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i); //push start to array and increment index by step
  } else {
    for (let i = start; i >= end; i += step) array.push(i); //pushes in reverse index order to array
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    //loop through each value of array
    total += value; //update total with new value through each iteration
  }
  return total;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(2, 20, 2));
// -> [2,4,6,8,10,12,14,16,18,20]

//write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
function reverseArray(array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.unshift(array[i]); //adds element to beginning of array
  }
  return newArray;
}
console.log(reverseArray(["A", "B", "C"])); //["C","B","A"]

//using array[1,2,3,4,5] for test
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    //looks like we are only iterating through half, and flip flopping indexes
    let old = array[i];
    array[i] = array[array.length - 1 - i]; //set array[0] to array[4]
    array[array.length - 1 - i] = old; //array[4] = array[0], array[3] =array[1]
  }
  return array;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); //[5,4,3,2,1]
