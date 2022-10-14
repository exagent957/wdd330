//WDD Web Frontend Development II BYUI
//Marc Williamson
//Index JS module, a starting point for task list project

//import Tasks class from todo module
import Tasks from "./todo.js";
//get the taskList from DOM
const list = document.querySelector("#taskList");
//create new instance of Tasks with list and key for localStorage
const myTasks = new Tasks(list, "task");
