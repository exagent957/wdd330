const x = 6;
const y = 19;

if (x === 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

if (x > 5 || y > 10) {
  console.log("x is more than 5 or y is more than 10");
}

if (x > 5 && y > 10) {
  console.log("x is more than 5 and y is more than 10");
}

//ternary operator
const a = 9;
const color = a > 10 ? "red" : "blue";
//const color = "No color";
// console.log(color);
//switch

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color not found");
}

//functions
function addNums(a = 1, b = 2) {
  //can set default parameters
  return a + b; //usually want to return something
}
console.log(addNums());
//arrow function   ---- has advantages when using lexical 'this' --more later
const addNums2 = (a = 1, b = 2) => a + b;
console.log(addNums2(5, 5));

//--------------------------------------
//object constructor function prototypes
// function Person(fname, lname, dob) {
//   this.fname = fname;
//   this.lname = lname;
//   this.dob = new Date(dob);
//   //method is basically a function inside a constructor or class
//   //this.getBirthYear = () => this.dob.getFullYear(); //place methods in prototype obj
//   // this.getFullName = () => `${this.fname} ${this.lname}`; //place methods in prototype obj
//   Person.prototype.getBirthYear = () => this.dob.getFullYear(); //best practice
//   Person.prototype.getFullName = () => `${this.fname} ${this.lname}`; //best practice
// }

//classes were added to JS in ES6 - syntactic sugar - prettier way of doing it
class Person {
  constructor(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
  }
  //note how this section moved out of constructor curly brackets but still part of class
  getBirthYear = () => this.dob.getFullYear();
  getFullName = () => `${this.fname} ${this.lname}`;
}
//instantiate object - Person
const person1 = new Person("Marc", "Williamson", "4-3-1980");
console.log(person1);
console.log(person1.fname);
console.log(person1.getBirthYear()); //calls getBirthYear() method
console.log(person1.getFullName());

//DOM
//window  is parent object in DOM
console.log(window); //note localStorage is part of window object

//single element selectors
const myForm = document.getElementById("my-form");
console.log(myForm);
console.log(document.querySelector(".container")); //newer, better practice
//multiple element selector
console.log(document.querySelectorAll(".item")); //gives NodeList vs HTML collection... NodeList better

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");
//ul.remove(); - remove first ul
//ul.lastElementChild.remove();  -remove last child
ul.firstElementChild.textContent = "Hello"; //changed first li in this ul
ul.children[1].innerText = "Marc";
ul.lastElementChild.innerHTML = "<h1>Williamson</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "red";

btn.addEventListener("click", (e) => {
  //the e is event parameter
  e.preventDefault();
  console.log("I was clicked");
  console.log(e.target);
  console.log(e.target.className);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
});
