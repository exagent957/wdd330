inputDateOnFocus = (x) => {
  x.value = `${new Date().toISOString().substr(0, 11)}${new Date()
    .toLocaleTimeString("it-IT")
    .substr(0, 5)}`;
  x.className = "valid";
};
inputDateOnFocusOut = (x) => {
  const inputDateRegExp =
    /^(19|20)\d\d-[0|1]\d-([0-2]\d|[3][0|1])T[0-2]\d:[0-5]\d$/;
  console.log(x.value);
  console.log(inputDateRegExp.test(x.value));
};

function handleInputDate(worklogDate) {
  const form = document.querySelector("form");
  const error = worklogDate.nextElementSibling;
  const inputDateRegExp =
    /^(19|20)\d\d-[0|1]\d-([0-2]\d|[3][0|1])T[0-2]\d:[0-5]\d$/;
  // let isValid = true;
  if (
    // worklogDate.value.length === 0 ||
    inputDateRegExp.test(worklogDate.value)
  ) {
    //  worklogDate.className = isValid ? "valid" : "invalid";
    worklogDate.className = "valid";
    error.textContent = "";
    error.className = "error";
    //console.log({ isValid });
    console.log(worklogDate.value);
    console.log(worklogDate.className);
  } else {
    //isValid = false;
    //console.log({ isValid });
    console.log(worklogDate.value);
    worklogDate.className = "invalid";
    error.textContent = "Enter date-time as mm/dd/yyyy hh:mm AM or PM";
    error.className = "error active";
  }
}
const worklogDate = document.querySelector("#newWorklogDate");
worklogDate.addEventListener("focusout", () => {
  handleInputDate(worklogDate);
});
// if (!isValid) {
//   console.log({ isValid });
//   worklogDate.className = "invalid";
//   error.textContent = "Enter date-time as mm/dd/yyyy hh:mm AM or PM";
//   error.className = "error active";
// } else {
//   isValid = true;
//   console.log({ isValid });
//   worklogDate.className = "valid";
//   error.textContent = "";
//   error.className = "error";
// }

// worklogDate.addEventListener("input", () => {
//   const isValid =
//     worklogDate.value.length === 0 || inputDateRegExp.test(worklogDate.value);
//   if (isValid) {
//     worklogDate.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   } else {
//     worklogDate.className = "invalid";
//   }
// });
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const isValid =
//     worklogDate.value.length === 0 || inputDateRegExp.test(worklogDate.value);
//   if (!isValid) {
//     worklogDate.className = "invalid";
//     error.textContent = "I expect a real date , darling!";
//     error.className = "error active";
//   } else {
//     worklogDate.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   }
// });

// // Now we can rebuild our validation constraint
// // Because we do not rely on CSS pseudo-class, we have to
// // explicitly set the valid/invalid class on our email field
// window.addEventListener("load", () => {
//   // Here, we test if the field is empty (remember, the field is not required)
//   // If it is not, we check if its content is a well-formed e-mail address.
//   const isValid =
//     worklogDate.value.length === 0 || inputDateRegExp.test(worklogDate.value);
//   worklogDate.className = isValid ? "valid" : "invalid";
// });

// // This defines what happens when the user types in the field
// worklogDate.addEventListener("input", () => {
//   const isValid =
//     worklogDate.value.length === 0 || inputDateRegExp.test(worklogDate.value);
//   if (isValid) {
//     worklogDate.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   } else {
//     worklogDate.className = "invalid";
//   }
// });

// // This defines what happens when the user tries to submit the data
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const isValid =
//     worklogDate.value.length === 0 || inputDateRegExp.test(worklogDate.value);
//   if (!isValid) {
//     worklogDate.className = "invalid";
//     error.textContent = "I expect a real date , darling!";
//     error.className = "error active";
//   } else {
//     worklogDate.className = "valid";
//     error.textContent = "";
//     error.className = "error";
//   }
// });
