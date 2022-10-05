//goes along with Ninja JS readings chapter 8 on forms

const form = document.forms[0];

//HTML form controls collection
const [input, button] = form.elements;
// console.log(form.elements);

//this code will alert when input element is focused
// const input = form.elements.searchInput;
// input.addEventListener("focus", () => alert("focused"), false);

//this code will trigger blur event - fires when cursor moved outside of form
//input.addEventListener("blur", () => alert("blurred"), false);

//triggers change event
//input.addEventListener("change", () => alert("changed"), false);

//submit eventListener
// form.addEventListener("submit", search, false);
// function search() {
//   alert(" Form Submitted");
// }

//retrieve and change form submission
form.addEventListener("submit", search, false);
function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}
input.value = "Search Here";
input.addEventListener(
  "focus",
  function () {
    if (input.value === "Search Here") {
      input.value = "";
    }
  },
  false
);
input.addEventListener(
  "blur",
  function () {
    if (input.value === "") {
      input.value = "Search Here";
    }
  },
  false
);
