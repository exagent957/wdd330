//import class we need
import Hikes from "./hikes.js";
//create instance of Hikes class
const myHikes = new Hikes("hikes");
// per instructor example - on load we want to grab the array and insert it into the page
window.addEventListener("load", () => myHikes.showHikeList());
myHikes.hikeList;
