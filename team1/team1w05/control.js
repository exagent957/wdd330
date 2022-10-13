import List from "./list.js";
import Rendering from "./rendering.js";


class Controller {
    constructor(parentId){
        this.parentId = document.getElementById(parentId);
        this.list = new List();
        this.render = new Rendering();
    }

    showHikeList() {
        this.render.renderHikeList(this.list.getAllHikes(), this.parentId);
        this.addHikeListener();
      }
    
    // show one hike with full details in the parentElement
    showOneHike(hikeName) {
        const hike = this.list.getHikeByName(hikeName);
        
        this.render.renderOneHikeFull(this.parentId, hike).ontouchend = () => {this.showHikeList()};

    }

  // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
  addHikeListener() {
    // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
    const childArray = Array.from(this.parentId.children)
    childArray.forEach(child => {
        child.addEventListener("touchend", e => {
            this.showOneHike(e.currentTarget.dataset.name);
            })
        });
    }
}

export default Controller
