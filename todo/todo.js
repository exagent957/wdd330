//WDD Web Frontend Development II BYUI
//Marc Williamson
//Module for task list project

//Imports
import { getFromLS, setToLS, bindClick } from "./utils.js";

// Reserve a space in memory for task list
let liveTasks = null;

//Render Entire List
function renderList(list, element, tasks, hidden) {
  console.log(list);
  element.innerHTML = "";
  list.forEach((task) => {
    const li = document.createElement("li");
    let checkbox = null;
    let button = null;

    if (hidden && task.completed) {
      li.innerHTML = `<label><input type="checkbox" checked><strike>
       ${task.content}</strike></label><button>X</button>`;
    } else {
      li.innerHTML = `<label><input type="checkbox" ${task.content}</label><button>X</button>`;
    }

    //Event listener for check box change
    //notice where checkbox is found li.label.checkbox
    checkbox = li.childNodes[0].childNodes[0];
    if (checkbox) {
      checkbox.addEventListener("change", function () {
        tasks.completeTask(task.id);
      });
    }

    //Event listener for button click
    //notice where button is found after label so childNodes[1]
    button = li.childNodes[1];
    console.log(button);
    if (button) {
      button.addEventListener("click", function () {
        tasks.removeTask(task.id);
      });
    }
    element.appendChild(li);
  });
}

/***** Read in tasks from Local Storage ****/
function getTasks(key) {
  if (liveTasks === null) {
    liveTasks = getFromLS(key) || [];
  }
  return liveTasks;
}

/***** Add new tasks to list of tasks ******/
function addNewTask(value, key) {
  const newTask = {
    id: new Date(),
    content: value,
    completed: false,
  };
  //push onto global liveTasks array
  liveTasks.push(newTask);
  //update LocalStorage after every change
  setToLS(key, liveTasks);
}

/***** Remove tasks from list of tasks *****/
// keeps every li not equal to key and gets rid of everything that matches key
function deleteTask(key) {
  let newList = liveTasks.filter((li) => li.id != key);
  //set global liveTasks to newList
  liveTasks = newList;
  //update LocalStorage after every change
  setToLS(key, liveTasks);
}

/***********************************************************
 * THIS SECTION NEEDS WORK - Incomplete ALL, COMPLETED, LEFT TO DO
 ************************************************************/
/***** need to add ability to filter tasks */
function filterTasks(key, completed = true) {
  let tasks = getTasks(key);
  return tasks.filter((li) => li.completed === hidden);
}

/*******************************************************************
 *                       Public    Tasks Class                     *
 *******************************************************************/
export default class Tasks {
  constructor(listElement, key) {
    this.listElement = listElement;
    console.log(this.listElement);
    this.key = key;
    //binding to this specific object when it executes
    //bindClick has a callback method and they behave strangely in classes
    //We want to bind it to the button but fire a method on the class
    bindClick("#addNewTask", this.newTask.bind(this));
    this.listTasks();
  }

  /**** new Task ****/
  newTask() {
    const task = document.querySelector("#newTaskInput");
    addNewTask(task.value, this.key);
    task.value = "";
    this.listTasks();
  }

  /**** find Task ****/
  findTask(id) {
    let task = liveTasks.find((element) => {
      return element.id === id;
    });
    return task;
  }

  /****  complete Task ****/
  completeTask(id) {
    console.log(id + "checked");
    let task = this.findTask(id);
    if (task) {
      //toggling complete status of task
      task.completed = !task.completed;
      setToLS(this.key, liveTasks);
      renderList(liveTasks, this.listElement, this, true);
    }
  }

  /**** remove Task ****/
  removeTask() {
    console.log(id + "removed");
    let task = this.findTask(id);
    if (task) {
      deleteTask(id);
      renderList(liveTasks, this.listElement, this, true);
    }
  }

  /**** list Tasks ...render the list ****/
  listTasks(hidden = true) {
    //Bro Chandler said this is not working as it should ... true / false
    renderList(getTasks(this.key), this.listElement, this, hidden);
  }
}
