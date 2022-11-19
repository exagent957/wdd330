/************ MODEL MODULE ******************************/

/************* Fetch JSON data *************
 * fetch returns string. json() method    *
 * resolves promise as JS object          *
 ******************************************/

export function getJSON(url) {
  return fetch(url)
    .then((response) => {
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
