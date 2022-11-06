//Team 1 W09 DrumKit keyboard exercise
window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0; //starts audio element at beginning
  audio.play(); //plays it
  key.classList.add("playing");
});
//there are multiple transitionend events with each keypress. We want to ignore all except the transform.
//TRIED THIS AS AN ARROW FUNCTION AND NO WORKIE
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
