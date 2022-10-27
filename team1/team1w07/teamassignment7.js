import hikeList from "./hikes.js";
import { Comments } from "./comments.js";

//Object Class- Hikes
class Hikes {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
    this.comments = new Comments("hike");
  }

  hideDetailedView() {
    const div = document.getElementById("detailedView");
    div.innerHTML = "";
  }

  // Show Detailed View
  showDetailedView(hike) {
    this.hideAllHikes();

    const div = document.getElementById("detailedView");

    div.innerHTML = `
        <button id="backButton" type="button">Back</button>
        <h2 class="hikeName">${hike.name}</h2>
        <img class="image" src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>Directions</h3>
                <p>${hike.directions}</p>
            </div>
            <div>
            <h3>Comments for ${hike.name}</h3>
            <p>${this.comments.showCommentsForThisHike(hike.name)}</p>
            <div>
                <h3>Add Comment for ${hike.name}</h3>
                <input id="addCommentInput" type="text">
                <button id="addCommentButton" type="button">Add Comment</button>
            </div>
        </div>
        </div>
        `;
    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", (e) => {
      this.showAllHikes(hike);
    });

    const addCommentButton = document.getElementById("addCommentButton");
    addCommentButton.addEventListener("click", (e) => {
      const input = document.getElementById("addCommentInput");
      this.comments.addComment(hike.name, input.value);
      this.showDetailedView(hike); // show page again so new comment shows up
    });
  }

  // Show the HTML for each Hike.
  showOneHike(hike) {
    const li = document.createElement("li");
    li.innerHTML = `
        <h2 class="hikeName">${hike.name}</h2>
        <img class="image" src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
        </div>
      `;
    li.addEventListener("click", (e) => {
      this.showDetailedView(hike);
    });
    return li;
  }

  // Hide All Hikes
  hideAllHikes() {
    const ul = document.getElementById("hikes");
    ul.innerHTML = "";
    this.comments.hideAllComments();
  }

  //Getting the ul and creating the li for each hike.
  showAllHikes() {
    this.hideDetailedView();
    const ul = document.getElementById("hikes");

    for (let i = 0; i < hikeList.length; i++) {
      const li = this.showOneHike(hikeList[i]);
      ul.appendChild(li);
    }
    this.comments.showAllComments();
  }
}

//When page loads, show all hikes.
window.addEventListener("load", () => {
  const hikes = new Hikes("hikes");
  hikes.showAllHikes();
});
