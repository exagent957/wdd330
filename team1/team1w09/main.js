//Team 1 W09 DrumKit keyboard exercise
window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0; //starts audio element at beginning each time called
  audio.play(); //plays it
  key.classList.add("playing");
  key.classList.add("moveDown");
  moveIt(key);
});

//Stretch 1. Move box down 10px every time pressed
//Stretch 2, move box back to orig spot after 10 key presses

const incrementBy = 10;
let newPx = 0;
function moveIt(key) {
  newPx += incrementBy;
  key.style.top = `${newPx}px`;
  console.log(key.style.top);
  if (key.style.top === "100px") {
    newPx = 0;
  }
}

//there are multiple transitionend events with each keypress. We want to ignore all except the transform event.
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
