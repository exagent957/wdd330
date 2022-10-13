import Controller from './control.js';

//on load grab the array and insert it into the page
const myHikesController = new Controller('hikes');

window.addEventListener('load', () => {
    myHikesController.showHikeList();
});