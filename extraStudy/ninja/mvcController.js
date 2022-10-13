import Item from "./mvcModel.js";
import view from "./mvcView.js";
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
export default controller;
