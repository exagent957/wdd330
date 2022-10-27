//Object Class- Comments
export class Comments {
  constructor(type) {
    this.type = type;
  }

  getCommentsLs() {
    return JSON.parse(localStorage.getItem("comments")) || [];
  }
  setCommentsLs(comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  hideAllComments() {
    const allCommentsDiv = document.getElementById("allComments");
    allCommentsDiv.innerHTML = "";
  }

  getAllComments() {
    const all = JSON.parse(localStorage.getItem("comments")) || [];
    const allComments = all.filter((comment) => comment.type === this.type);
    return allComments;
  }

  showAllComments() {
    const allCommentsDiv = document.getElementById("allComments");
    const allComments = this.getAllComments();

    for (let i = 0; i < allComments.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
                <div class="comment">
                    <div>Name: ${allComments[i].name}</div>
                    <div>Date: ${allComments[i].date}</div>
                    <div>Comment: ${allComments[i].content}</div>
                </div>
                <br>
            `;
      allCommentsDiv.appendChild(div);
    }
  }

  showCommentsForThisHike(name) {
    const allComments = this.getAllComments();
    const commentsForThisHike = allComments.filter(
      (comments) => comments.name === name
    );

    const commentsDiv = document.createElement("div");
    for (let i = 0; i < commentsForThisHike.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
                <div class="detailed-view-comment">
                    <div>Name: ${commentsForThisHike[i].name}</div>
                    <div>Date: ${commentsForThisHike[i].date}</div>
                    <div>Comment: ${commentsForThisHike[i].content}</div>
                </div>
                <br>
            `;
      commentsDiv.appendChild(div);
    }
    return commentsDiv.innerHTML;
  }

  addComment(name, inputValue) {
    const comments = this.getCommentsLs();
    const newComment = {
      type: this.type,
      name: name,
      date: new Date(),
      content: inputValue,
    };
    comments.push(newComment);
    this.setCommentsLs(comments);
  }
}
