//WDD Web Frontend Development II BYUI
//Marc Williamson
//Utilities JS module for todo list project

/**** Query selector helper ************/
function qs(selectorName) {
  document.querySelector(selectorName);
}

/******** Read from Local Storage ******/
export function getFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

/******** Write to Local Storage ******/
export function setToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/********  Bind click event listener
 * to each li *************************/
export function bindClick(selector, callback) {
  const element = qs(selector);
  element.addEventListener("click", callback);
}
