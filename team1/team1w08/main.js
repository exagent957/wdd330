//Team1 W08 API Activity
//Star Wars API - fetching and displaying pagination

/************ Model Code ******************
 * Should handle anything to do with data *
 * Usually connected to the database      *
 * Responds to the Controller             *
 ******************************************/
/************* Fetch API data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/
function getJSON(url) {
  return fetch(url)
    .then((response) => {
      parentDiv.innerText = "Waiting for response from server ...";
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

/************* Controller Code **************
 * Interconnection between Model and View   *
 * Handles no data logic.                   *
 * Tells Model what to do. Takes info       *
 * from Model, processes it, sends to View  *
 ********************************************/
/**** Show People  ******/
function showPeople(url = "https://swapi.dev/api/people/") {
  getJSON(url).then((data) => {
    console.log({ data });
    const people = data.results;
    console.log({ people });
    const peopleListElement = document.querySelector("#parentDiv");
    const detailsContainer = document.querySelector("#detailsContainer");
    console.log(peopleListElement);
    renderPeopleList(people, peopleListElement);
    if (data.next) {
      const next = document.querySelector("#next");
      next.ontouchend = () => {
        showPeople(data.next);
        detailsContainer.classList.add("hidden");
      };
      next.onclick = () => {
        showPeople(data.next);
        detailsContainer.classList.add("hidden");
      };
    }
    if (data.previous) {
      const previous = document.querySelector("#previous");
      previous.ontouchend = () => {
        showPeople(data.previous);
        detailsContainer.classList.add("hidden");
      };
      previous.onclick = () => {
        showPeople(data.previous);
        detailsContainer.classList.add("hidden");
      };
    }
  });
}
showPeople();

/**** Person Details ****/
function showPersonDetails(person) {
  const detailsContainer = document.querySelector("#detailsContainer");
  detailsContainer.classList.remove("hidden");
  renderPersonDetails(person);
}

/*********** Views Code *********************
 * Renders data representation .
 * User Interface. Data collected by Model
 * Processed by Controller. Controller
 * sends all info to View to present it to UI
 *********************************************/

/***** Render People List *****/
function renderPeopleList(people, peopleListElement) {
  const list = peopleListElement;
  console.log({ list });
  list.innerHTML = "<h2>Star Wars Characters</h2>";
  people.forEach(function (person) {
    console.log(person);
    let listItem = document.createElement("p");
    listItem.innerHTML = `<a href="${person.url}">${person.name}</a>`;
    listItem.addEventListener("click", (e) => {
      e.preventDefault();
      showPersonDetails(person);
    });
    list.appendChild(listItem);
  });
}

/**** Render Person Details ****/
function renderPersonDetails(person) {
  const elName = document.querySelector(".name");
  const elGender = document.querySelector(".gender");
  const elHeight = document.querySelector(".height");
  const elMass = document.querySelector(".mass");
  const elHairColor = document.querySelector(".hair_color");
  const elEyeColor = document.querySelector(".eye_color");
  const elSkinColor = document.querySelector(".skin_color");

  elName.innerText = person.name;
  elGender.innerText = person.gender;
  elHeight.innerText = person.height;
  elMass.innerText = person.mass;
  elHairColor.innerText = person.hair_color;
  elEyeColor.innerText = person.eye_color;
  elSkinColor.innerText = person.skin_color;
}
