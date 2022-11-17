export default // Quake View handler
class QuakesView {
  renderQuakeList(quakeList, listElement) {
    listElement.innerHTML = quakeList.features
      .map(quake => {
        return `<li data-id=${quake.id}>${quake.properties.title}, ${new Date(
          quake.properties.time
        )}</li>`;
      })
      .join('');
  }
  renderQuake(quake, element) {
    // const quakeProperties = Object.entries(quake.properties);
    // console.log('Quake', quake);
    // console.log('quakeProperties', quakeProperties);
    // element.innerHTML = quakeProperties
    //   .map(item => {
    //     if (item[0] === 'time' || item[0] === 'updated') {
    //       return `<li>${item[0]}: ${new Date(item[1])}</li>`;
    //     } else return `<li>${item[0]}: ${item[1]}</li>`;
    //   })
    //   .join('');
    console.log('quake.properties', quake.properties);
    element.innerHTML = `
        <div id="quakeInfo">
            <div class="rowInfo">
                <span class="property-label">Mag:</span>
                <span class="infoResponse">${quake.properties.mag}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">Place:</span>
                <span class="infoResponse">${quake.properties.place}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">Time:</span>
                <span class="infoResponse">${new Date(quake.properties.time)}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">Type:</span>
                <span class="infoResponse">${quake.properties.type}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">Gap:</span>
                <span class="infoResponse">${quake.properties.gap}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">NST:</span>
                <span class="infoResponse">${quake.properties.nst}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">SIG:</span>
                <span class="infoResponse">${quake.properties.sig}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">RMS:</span>
                <span class="infoResponse">${quake.properties.rms}</span>
            </div>
            <div class="rowInfo">
                <span class="property-label">Dmin:</span>
                <span class="infoResponse">${quake.properties.dmin}</span>
            </div>
        </div>
    `;

    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.innerHTML = 'Back';
    backButton.onclick = () => {
        document.getElementById('Local Quakes link').click();
    };
    element.prepend(backButton);
  }
}