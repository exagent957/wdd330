//MVC js example code
//In JavaScript, a model is often represented by a class that can create new
// instances of an object. This will keep track of any properties the list item has, as
// well as any methods. In this example, we’ll create an Item class, and use the
// constructor function to instantiate an Item object with a name property provided
// as an argument to the constructor function. We also assign a reference to the form
// to a variable called form. Add this code to main.js:
"use strict";
const form = document.forms[0];
class Item {
  constructor(name) {
    this.name = name;
  }
}
// Each new list item that is created will be an instance of the Item class.
// Next we’ll create a controller object.
//This will be responsible for adding an event listener to the form to see when the user adds information. When this
// happens, it will create a new instance of the model and then render the updated
// view.
const controller = {
  watch(form) {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
      },
      false
    );
  },
  add(name) {
    const item = new Item(name);
    view.render(item);
  },
};
// After this, we create a view object with a render() method. This is used to
// produce an HTML fragment that shows the instance’s name (from the name
// property stored in the model). It is dynamically inserted into the list using DOM
// API methods.
const view = {
  render(item) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = item.name;
    list.appendChild(li);
    // reset the input field
    form.name.value = "";
  },
};
// Finally, we have to call the watch() method of the controller. This keeps an eye
// on the form and checks when it is submitted.
controller.watch(form);
