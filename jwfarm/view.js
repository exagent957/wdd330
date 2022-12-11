/***** Render Weather ******/
export function renderWeather(weather) {
  const temp = weather.observations[0].imperial.temp;
  const chill = weather.observations[0].imperial.windChill;
  const speed = weather.observations[0].imperial.windSpeed;
  const gust = weather.observations[0].imperial.windGust;
  let direction = weather.observations[0].winddir;
  let precipRate = weather.observations[0].imperial.precipRate;

  document.querySelector("#p1 span").innerHTML = `${temp}<span>&#8457</span>`;
  document.querySelector("#p2 span").innerHTML = `${chill}<span>&#8457</span>`;
  /* Convert wind direction degree into cardinal units */
  if (direction < 22.5) {
    direction = "N";
  } else if (direction >= 22.5 && direction < 67.5) {
    direction = "NE";
  } else if (direction >= 67.5 && direction < 112.5) {
    direction = "E";
  } else if (direction >= 112.5 && direction < 157.5) {
    direction = "SE";
  } else if (direction >= 157.5 && direction < 202.5) {
    direction = "S";
  } else if (direction >= 202.5 && direction < 247.5) {
    direction = "SW";
  } else if (direction >= 247.5 && direction < 292.5) {
    direction = "W";
  } else direction = "NW";

  /* Show wind calm when under 2mph*/
  if (speed > 2) {
    document.querySelector(
      "#p3 span"
    ).innerHTML = `${direction} at ${speed} MPH gusting to ${gust} MPH`;
  } else {
    document.querySelector("#p3 span").innerHTML = "Calm";
  }
  /* if not currently raining say so */
  if (precipRate === 0) {
    document.querySelector("#p4 span").innerHTML = `Currently None`;
  } else {
    document.querySelector(
      "#p4 span"
    ).innerHTML = `${precipRate} inches per hour`;
  }
}

/****** Render Events ******/
export function renderEvents(eventsList) {
  const eventsUl = document.querySelector("#eventsUl");
  eventsList.forEach((event) => {
    const li = document.createElement("li");
    li.innerHTML = `${event.date} - ${event.event}`;
    eventsUl.appendChild(li);
  });
}

/***** Render Worklogs ******/
export function renderWorklogs(list, element, worklogs) {
  list.sort((a, b) => {
    let da = new Date(a.worklogDate),
      db = new Date(b.worklogDate);
    if (da < db) {
      return -1;
    }
    if (da > db) {
      return 1;
    }
    return 0;
  });
  console.log(list);
  element.innerHTML = "";
  list.forEach((worklog) => {
    const li = document.createElement("li");
    let buttonEdit = null;
    let buttonSave = null;
    let buttonRemove = null;
    worklog.worklogDate = new Date(worklog.worklogDate).toLocaleString(
      "en-US",
      {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    li.innerHTML = `<button>X</button><label>${worklog.worklogDate}</label><label>${worklog.content}</label><button>Edit</button><button>Save</button>`;

    buttonEdit = li.childNodes[3];
    buttonSave = li.childNodes[4];
    buttonRemove = li.childNodes[0];
    buttonSave.style.display = "none";
    if (buttonEdit) {
      buttonEdit.addEventListener("click", () => {
        buttonEdit.style.display = "none";
        buttonSave.style.display = "inline-block";
        li.childNodes[1].setAttribute("contenteditable", "true");
        li.childNodes[1].focus();
        li.childNodes[2].setAttribute("contenteditable", "true");
      });
    }
    if (buttonSave) {
      buttonSave.addEventListener("click", () => {
        let elementDate = li.childNodes[1];
        let updatedDate = li.childNodes[1].innerText;
        elementDate = handleUpdatedDate(elementDate);
        if (elementDate.className === "invalid") {
          return;
        }
        let elementContent = li.childNodes[2];
        let updatedContent = li.childNodes[2].innerText;
        elementContent = handleUpdatedContent(elementContent);
        if (elementContent.className === "invalid") {
          return;
        }
        buttonEdit.style.display = "inline-block";
        buttonSave.style.display = "none";
        li.childNodes[1].setAttribute("contenteditable", "false");
        li.childNodes[2].setAttribute("contenteditable", "false");
        worklogs.updateWorklog(worklog.id, updatedDate, updatedContent);
      });
    }
    if (buttonRemove) {
      buttonRemove.addEventListener("click", () => {
        worklogs.removeWorklog(worklog.id);
      });
    }
    element.appendChild(li);
  });
}

/***** Handle Collapsible Views ******/
const hideOutlook = document.querySelector("#hideOutlook");
const showOutlook = document.querySelector("#showOutlook");
const eventsUl = document.querySelector("#eventsUl");

hideOutlook.addEventListener("click", () => {
  hideOutlook.classList.remove("active");
  hideOutlook.classList.add("hidden");
  eventsUl.classList.remove("active");
  eventsUl.classList.add("hidden");
  showOutlook.classList.remove("hidden");
  showOutlook.classList.add("active");
});
showOutlook.addEventListener("click", () => {
  showOutlook.classList.remove("active");
  showOutlook.classList.add("hidden");
  eventsUl.classList.remove("hidden");
  eventsUl.classList.add("active");
  hideOutlook.classList.remove("hidden");
  hideOutlook.classList.add("active");
});
hideOutlook.addEventListener("touchend", () => {
  hideOutlook.classList.remove("active");
  hideOutlook.classList.add("hidden");
  eventsUl.classList.remove("active");
  eventsUl.classList.add("hidden");
  showOutlook.classList.remove("hidden");
  showOutlook.classList.add("active");
});
showOutlook.addEventListener("touchend", () => {
  showOutlook.classList.remove("active");
  showOutlook.classList.add("hidden");
  eventsUl.classList.remove("hidden");
  eventsUl.classList.add("active");
  hideOutlook.classList.remove("hidden");
  hideOutlook.classList.add("active");
});

const hideLogs = document.querySelector("#hideLogs");
const showLogs = document.querySelector("#showLogs");
const worklogsContainer = document.querySelector("#worklogsContainer");
hideLogs.addEventListener("click", () => {
  hideLogs.classList.remove("active");
  hideLogs.classList.add("hidden");
  worklogsContainer.classList.remove("active");
  worklogsContainer.classList.add("hidden");
  showLogs.classList.remove("hidden");
  showLogs.classList.add("active");
});
showLogs.addEventListener("click", () => {
  showLogs.classList.remove("active");
  showLogs.classList.add("hidden");
  worklogsContainer.classList.remove("hidden");
  worklogsContainer.classList.add("active");
  hideLogs.classList.remove("hidden");
  hideLogs.classList.add("active");
});
hideLogs.addEventListener("touchend", () => {
  hideLogs.classList.remove("active");
  hideLogs.classList.add("hidden");
  worklogsContainer.classList.remove("active");
  worklogsContainer.classList.add("hidden");
  showLogs.classList.remove("hidden");
  showLogs.classList.add("active");
});
showLogs.addEventListener("touchend", () => {
  showLogs.classList.remove("active");
  showLogs.classList.add("hidden");
  worklogsContainer.classList.remove("hidden");
  worklogsContainer.classList.add("active");
  hideLogs.classList.remove("hidden");
  hideLogs.classList.add("active");
});
