class View {
  constructor(form, item) { 
    this.form = form
    this.item = item
   }
  render(item) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = this.item.name;
    list.appendChild(li);
    // reset the input field
    form.name.value = "";
  },

};

export default view;
