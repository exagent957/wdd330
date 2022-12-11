inputDateOnFocus = (x) => {
  x.value = `${new Date().toISOString().substr(0, 11)}${new Date()
    .toLocaleTimeString("it-IT")
    .substr(0, 5)}`;
  x.className = "valid";
};

function handleInputDate(worklogDate) {
  const error = document.querySelector("#inputDateError");
  const inputDateRegExp =
    /^(19|20)\d\d-[0|1]\d-([0-2]\d|[3][0|1])T[0-2]\d:[0-5]\d$/;
  if (!inputDateRegExp.test(worklogDate.value) || worklogDate.value === "") {
    worklogDate.className = "invalid";
    error.textContent = "Enter date-time as mm/dd/yyyy hh:mm AM or PM";
    error.className = "error active";
    return worklogDate;
  } else {
    worklogDate.className = "valid";
    error.textContent = "";
    error.className = "error";
    return worklogDate;
  }
}

function handleInputContent(worklogInput) {
  const updatedContentRegExp = /^[ A-Za-z0-9()[\]+\-*\/%\s?!@#$%=.,;:'"]*$/;
  const error = document.querySelector("#inputContentError");
  if (
    worklogInput.value === "" ||
    !updatedContentRegExp.test(worklogInput.value)
  ) {
    worklogInput.className = "invalid";
    error.textContent =
      "Please enter worklog using basic text characters and punctuation.";
    error.className = "error active";
    return worklogInput;
  } else {
    worklogInput.className = "valid";
    error.textContent = "";
    error.className = "error";
    return worklogInput;
  }
}

let worklogDate = document.querySelector("#newWorklogDate");
worklogDate.addEventListener("focus", () => {
  worklogDate = handleInputDate(worklogDate);
});

let worklogInput = document.querySelector("#newWorklogInput");
worklogInput.addEventListener("focus", () => {
  worklogInput = handleInputContent(worklogInput);
});

function handleUpdatedDate(elementDate) {
  const updatedDateRegExp =
    /^[0|1]\d\/([0-2]\d|[3][0|1])\/(19|20)\d\d,\s[0|1]\d:[0-5]\d\s[A|P]M$/;
  const error = document.querySelector("#dateError");
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
