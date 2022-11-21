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
//Render Entire List - called after every change
export function renderWorklogs(list, element, worklogs) {
  console.log(list);
  console.log(element);
  console.log(worklogs);
  element.innerHTML = "";
  list.forEach((worklog) => {
    const li = document.createElement("li");
    let buttonEdit = null;
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
    console.log(worklog.worklogDate);
    li.innerHTML = `<label>${worklog.worklogDate}: ${worklog.content}</s></label><button>Edit</button><button>X</button>`;

    buttonEdit = li.childNodes[0];
    buttonRemove = li.childNodes[1];
    if (buttonEdit) {
      console.log("from buttonEdit");
      // buttonEdit.addEventListener("click", function () {
      //   worklogs.removeWorklog(worklog.id);
    }
    if (buttonRemove) {
      console.log("from buttonRemove");
    }
    element.appendChild(li);
  });
}
