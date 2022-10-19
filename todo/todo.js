//WDD Web Frontend Development II BYUI
//Marc Williamson
//Module for task list project

//Imports
import { getFromLS, setToLS, bindClick } from "./utils.js";

// Reserve a space in memory for task list
let liveTasks = null;

//Render Entire List - called after every change
function renderList(list, element, tasks, hidden) {
  console.log(list);
  element.innerHTML = "";
  list.forEach((task) => {
    const li = document.createElement("li");
    let checkbox = null;
    let button = null;

    if (hidden && task.completed) {
      li.innerHTML = `<label><input type="checkbox" checked><s>${task.content}</s></label><button>X</button>`;
    } else {
      li.innerHTML = `<label><input type="checkbox"> ${task.content}</label><button>X</button>`;
    }

    //Event listener for check box change
    //notice where checkbox is found li.label.checkbox
    checkbox = li.childNodes[0].childNodes[0];
    if (checkbox) {
      checkbox.addEventListener("change", function () {
        tasks.completeTask(task.id);
      });
    }

    //Event listener for delete button click
    //notice where button is found after label so childNodes[1]
    button = li.childNodes[1];
    if (button) {
      button.addEventListener("click", function () {
        tasks.removeTask(task.id);
      });
    }
    element.appendChild(li);
  });

  //Handle event listeners for each of the task filters
  const allFilter = document.querySelector("#all");
  const activeFilter = document.querySelector("#active");
  const completedFilter = document.querySelector("#completed");
  allFilter.addEventListener("click", () => {
    allFilter.classList.add(["active"]);
    activeFilter.classList.remove(["active"]);
    completedFilter.classList.remove(["active"]);
  });
  activeFilter.addEventListener("click", () => {
    activeFilter.classList.add(["active"]);
    allFilter.classList.remove(["active"]);
    completedFilter.classList.remove(["active"]);
  });
  completedFilter.addEventListener("click", () => {
    completedFilter.classList.add(["active"]);
    allFilter.classList.remove(["active"]);
    activeFilter.classList.remove(["active"]);
  });
}

/***** private function - READ IN TASKS from Local Storage ****/
function getTasks(key) {
  if (liveTasks === null) {
    liveTasks = getFromLS(key) || [];
  }
  return liveTasks;
}

/***** private function - ADD NEW TASK to list of tasks ******/
function addNewTask(value, key) {
  const newTask = {
    id: new Date(),
    content: value,
    completed: false,
  };
  //push onto global activeTasks array
  liveTasks.push(newTask);
  //update localStorage after every change
  setToLS(key, liveTasks);
}

/***** private function - DELETE TASK from list of tasks *****/
// keeps every li not equal to key and gets rid of everything that matches key
function deleteTask(key, listKey) {
  let newList = liveTasks.filter((li) => li.id != key);
  //set global activeTasks to newList
  console.log(`key inside deleteTask(): ${key}`);
  liveTasks = newList;
  //update localStorage after every change
  setToLS(listKey, liveTasks);
}

/***** private function - UPDATE # TASKS LEFT */
function numTasksLeft() {
  const tasksLeft = document.querySelector("#numTasksLeft");
  let counter = 0;
  if (liveTasks) {
    for (let i = 0; i < liveTasks.length; i++) {
      if (liveTasks[i].completed === false) {
        counter++;
      }
    }
    if (counter !== 1) {
      tasksLeft.innerHTML = `${counter} Tasks Left`;
    } else {
      tasksLeft.innerHTML = `${counter} Task Left`;
    }
  }
}

/***********************************************************
 * Filter Tasks Section
 ************************************************************/
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
    console.log(`this.key points to ${this.key} in class constructor`);
    //binding to this specific object when it executes
    //bindTouch has a callback method and they behave strangely in classes
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
    console.log(id + " task checked");
    let task = this.findTask(id);
    if (task) {
      //toggling complete status of task
      task.completed = !task.completed;
      setToLS(this.key, liveTasks);
      renderList(liveTasks, this.listElement, this, true);
    }
    //Update number of tasks left
    numTasksLeft();
  }

  /**** remove Task ****/
  removeTask(id) {
    console.log(id + " task removed");
    let task = this.findTask(id);
    if (task) {
      deleteTask(id, this.key);
      renderList(liveTasks, this.listElement, this, true);
      numTasksLeft();
    }
  }

  /**** list Tasks ...render the list ****/
  listTasks(hidden = true) {
    console.log(`this points to ${this} inside listTasks()`);
    console.log(`this.key points to ${this.key} inside listTasks()`);
    console.log(
      `this.listElement points to ${this.listElement} inside listTasks()`
    );
    renderList(getTasks(this.key), this.listElement, this, hidden);
    numTasksLeft();
  }
}
