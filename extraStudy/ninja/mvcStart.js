//trying to figure out import/export mvc structure
// import Item from "./mvcModel.js";
// import controller from "./mvcController.js";
// import view from "./mvcView.js";
// export { Item };
// export { controller };
// export { view };
//controller.watch(form);
class Model {
  constructor() {}
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
