inputDateOnFocus = (x) => {
  x.value = `${new Date().toISOString().substr(0, 11)}${new Date()
    .toLocaleTimeString("it-IT")
    .substr(0, 5)}`;
  x.className = "valid";
};

function handleInputDate(worklogDate) {
  const error = worklogDate.nextElementSibling;
  const inputDateRegExp =
    /^(19|20)\d\d-[0|1]\d-([0-2]\d|[3][0|1])T[0-2]\d:[0-5]\d$/;
  if (inputDateRegExp.test(worklogDate.value)) {
    worklogDate.className = "valid";
    error.textContent = "";
    error.className = "error";
    console.log(worklogDate.value);
    console.log(worklogDate.className);
  } else {
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

function handleUpdatedDate(elementDate) {
  const updatedDateRegExp =
    /^[0|1]\d\/([0-2]\d|[3][0|1])\/(19|20)\d\d,\s[0|1]\d:[0-5]\d\s[A|P]M$/;
  const error = document.querySelector("#dateError");
  console.log(elementDate.innerText);
  console.log(updatedDateRegExp.test(elementDate.innerText));

  if (
    elementDate.innerText === "" ||
    elementDate.innerText === "Invalid Date" ||
    !updatedDateRegExp.test(elementDate.innerText)
  ) {
    elementDate.className = "invalid";
    error.textContent = "Please enter date-time as mm/dd/yyyy, hh:mm AM or PM";
    error.className = "error active";
    return elementDate;
  } else {
    elementDate.className = "valid";
    error.textContent = "";
    error.className = "error";
    return elementDate;
  }
}

function handleUpdatedContent(elementContent) {
  const updatedContentRegExp = /^[ A-Za-z0-9()[\]+\-*\/%\s?!@#$%=.,;:'"]*$/;
  const error = document.querySelector("#contentError");
  console.log(elementContent.innerText);
  console.log(updatedContentRegExp.test(elementContent.innerText));

  if (
    elementContent.innerText === "" ||
    !updatedContentRegExp.test(elementContent.innerText)
  ) {
    elementContent.className = "invalid";
    error.textContent =
      "Please enter worklog using basic text characters and punctuation.";
    error.className = "error active";
    return elementContent;
  } else {
    elementContent.className = "valid";
    error.textContent = "";
    error.className = "error";
    return elementContent;
  }
}
