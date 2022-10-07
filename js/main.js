//array of weekly links for portfolio
const weeklyLinks = [
  {
    label: "Week 1 notes",
    url: "w01/w01.html",
  },
  {
    label: "Week 2 notes",
    url: "w02/w02.html",
  },
  {
    label: "Week 2 Team1 Exercise",
    url: "team1/team1w02/index.html",
  },
  {
    label: "Week 3 notes",
    url: "w03/w03.html",
  },
  {
    label: "Week 3 Team1 Exercise",
    url: "team1/team1w03/team.html",
  },
  {
    label: "Week 4 notes",
    url: "w04/w04.html",
  },
  {
    label: "Week 4 Team1 Exercise - Tic Tac Toe",
    url: "team1/team1w04/index.html",
  },
  {
    label: "Week 4 Team1 Exercise - My Solution",
    url: "team1/team1w04/mytictactoe.html",
  },
];
//function call
listWeeklyItems(weeklyLinks, "weeklyList");

//create the weekly list of links function
function listWeeklyItems(weekItems, listElementName) {
  let ol = document.getElementById(listElementName);
  if (ol) {
    //loop through anonymous objects as taught by Bro Chandler
    weekItems.forEach((element) => {
      //Lambda expression

      //create the anchor tag in the DOM and set attributes
      let anchor = document.createElement("a");
      anchor.innerHTML = element.label;
      anchor.href = element.url;
      anchor.target = "_blank"; //open link in new window
      //create li tag and attach anchor tag
      let li = document.createElement("li");
      li.appendChild(anchor);
      ol.appendChild(li);
    });
  }
}
