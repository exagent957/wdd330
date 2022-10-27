//commentModel
/*****************************************************
 *           CommentModel CLASS - not exported       *
 *****************************************************/
class CommentModel {
  constructor(type) {
    this.type = type;
    this.comments = readFromLS(this.type) || [];
  }

  /***** get comments - filtered or all *********/
  getComments(qry = null) {
    if (qry === null) {
      return this.comments;
    } else {
      return this.comments.filter((el) => el.name === qry);
    }
  }
  /**** add comment *****/
  addComment(postName, comment) {
    const newComment = {
      name: postName,
      comment: comment,
      date: new Date(),
    };
    this.comments.push(newComment);
    writeToLS(this.type, this.comments);
  }
}
/**************** End of CommentModel Class *************/

/****  private methods for CommentModel Class ***********/

/***** write to Local Storage ******/
function writeToLS(key, data) {
  window.localStorage.setItem(key, JSON.stringify(data));
}

/***** read from Local Storage *****/
function readFromLS(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

/***** render Comment List ********/
function renderCommentList(element, comments) {
  element.innerHTML = "";
  comments.forEach((el) => {
    let item = document.createElement("li");
    item.innerHTML = `${el.name}: ${el.comment}`;
    element.appendChild(item);
  });
}

/***** build the view -  VIEWER CODE *****/
const commentUI = `<div class="addComment"><h2>Add a comment</h2>
<input type="text" id="commentEntry" /><button id="commentSubmit">Comment</button></div><h2>Comments</h2><ul class="comments"></ul>`;

// Comments: this code handles getting the list of comments from the data source, and outputting them to the screen at the right time.  This is often categorized as Controller code.
/*********************************************************
 *            Comments Class   CONTROLLER CODE           *
 *********************************************************/
class Comments {
  constructor(type, commentElementId) {
    this.type = type;
    this.commentElementId = commentElementId;
    this.model = new CommentModel(this.type);
  }
  /**** event listener submit *****/
  addSubmitListener(postName) {
    // use element.ontouchend vs element.touchend to avoid more than one listener getting attached at a time to the button.
    document.getElementById("commentSubmit").ontouchend = () => {
      this.model.addComment(
        postName,
        document.getElementById("commentEntry").value
      );
      document.getElementById("commentEntry").value = "";
      this.showCommentList(postName);
    };
  }
  /***** show comments list *******/
  showCommentList(qry = null) {
    try {
      const parent = document.getElementById(this.commentElementId);
      if (!parent) throw new Error("comment parent not found");
      // check to see if the commentUI code has been added yet
      if (parent.innerHTML === "") {
        parent.innerHTML = commentUI;
      }
      if (qry !== null) {
        // looking at one post, show comments and new comment button
        document.querySelector(".addComment").style.display = "block";
        this.addSubmitListener(qry);
      } else {
        // no post name provided, hide comment entry
        document.querySelector(".addComment").style.display = "none";
      }
      // get the comments from the model
      let comments = this.model.getComments(qry);
      if (comments === null) {
        // avoid an error if there are no comments yet.
        comments = [];
      }
      renderCommentList(parent.lastChild, comments);
    } catch (error) {
      console.log(error);
    }
  }
}
export default Comments;
/***** End of Comments CLASS ***********************/
