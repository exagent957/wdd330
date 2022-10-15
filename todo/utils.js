//WDD Web Frontend Development II BYUI
//Marc Williamson
//Utilities JS module for todo list project

/******** Read from Local Storage ******/
export function getFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

/******** Write to Local Storage ******/
export function setToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/******** Remove from Local Storage ***/
export function removeFromLS(key) {
  localStorage.removeItem(key);
}

/****  Event listener to each li ******/
export function bindClick(selector, callback) {
  const element = document.querySelector(selector);
  element.addEventListener("click", callback);
}
