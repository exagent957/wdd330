//WDD Web Frontend Development II BYUI
//Marc Williamson
//Module for task list project

//Imports
import { getFromLS, setToLS, bindClick } from "./utils.js";

// Reserve a space in memory for task list
let liveTasks = null;

//Render Entire List - called after every change
function renderList(list, element, tasks, unfiltered) {
  console.log(list);
  element.innerHTML = "";
  list.forEach((task) => {
    const li = document.createElement("li");
    let checkbox = null;
    let button = null;

    //first 2 states are used for listing all tasks
    if (unfiltered && task.completed) {
      li.innerHTML = `<label><input type="checkbox" checked><s>${task.content}</s></label><button>X</button>`;
    } else if (unfiltered && !task.completed) {
      li.innerHTML = `<label><input type="checkbox"> ${task.content}</label><button>X</button>`;
      //true when Active filter button clicked
    } else if (!unfiltered && !task.completed) {
      li.innerHTML = `<label><input type="checkbox"> ${task.content}</label><button>X</button>`;
      //true when Completed filter button clicked
    } else if (!unfiltered && task.completed) {
      li.innerHTML = `<label><input type="checkbox" checked><s>${task.content}</s></label><button>X</button>`;
    }

    //Event listener for check box change
    //notice where checkbox is found li.label.checkbox
    checkbox = li.childNodes[0].childNodes[0];
    if (checkbox) {
      checkbox.addEventListener("change", function () {
        tasks.completeTask(task.id);
      });

      //Event listener for delete button click
      //notice where button is found after label so childNodes[1]
      button = li.childNodes[1];
      if (button) {
        button.addEventListener("click", function () {
          tasks.removeTask(task.id);
        });
      }
      element.appendChild(li);
    }
  });

  //Handle style of each filter button when clicked
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

/***** private function - READ IN key:task from Local Storage ****/
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

/*******************************************************************
 *                       Public Class -    Tasks                   *
 *******************************************************************/
export default class Tasks {
  constructor(listElement, key) {
    this.listElement = listElement;
    console.log(this.listElement);

    //key for local storage
    //this.key = key represents "task"
    this.key = key;
    //binding to this specific object when it executes
    //bindClick has a callback method and they behave strangely in classes
    //We want to bind it to the button but fire a method on the class
    //console.log reports "this" = [object Object] which I do not understand
    bindClick("#addNewTask", this.newTask.bind(this));
    bindClick("#all", this.listTasks.bind(this));
    bindClick("#active", this.showActive.bind(this, false));
    bindClick("#completed", this.showCompleted.bind(this, false));

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
  listTasks(unfiltered = true) {
    renderList(getTasks(this.key), this.listElement, this, unfiltered);
    numTasksLeft();
  }

  /***** show active tasks ************/
  showActive(unfiltered = false) {
    let newList = [];
    let tasks = getTasks(this.key);
    newList = tasks.filter((li) => li.completed === false);
    renderList(newList, this.listElement, this, unfiltered);
  }

  /***** show completed tasks *********/
  showCompleted(unfiltered = false) {
    let newList = [];
    let tasks = getTasks(this.key);
    newList = tasks.filter((li) => li.completed === true);
    renderList(newList, this.listElement, this, unfiltered);
  }
}
