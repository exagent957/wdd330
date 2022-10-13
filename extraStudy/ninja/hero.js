//making a superhero object from form input
const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);
function makeHero(event) {
  event.preventDefault(); // prevent the form from being submitted
  const hero = {}; // create an empty object
  hero.name = form.heroName.value; // create a name property based on the input field's value
  hero.realName = form.realName.value;
  alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
  return hero;
}

//using checkboxes - checking for the checked box
// hero.powers = [];
// for (let i = 0; i < form.powers.length; i++) {
//   if (form.powers[i].checked) {
//     hero.powers.push(form.powers[i].value);
//   }
// }
// shorter version
hero.powers = [...form.powers]
  .filter((box) => box.checked)
  .map((box) => box.value);
hero.age = form.age.value;

//provide instant validation feedback before submission
const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);
function validateInline() {
  const heroName = this.value.toUpperCase();
  if (heroName.startsWith("X")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
//disable submit if error
form.heroName.addEventListener("keyup", disableSubmit, false);
