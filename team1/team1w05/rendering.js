
const imgBasePath = '//byui-cit.github.io/cit261/examples/';

class Rendering {
    
    renderHikeList(hikes, parent) {
        parent.innerHTML = "";
        hikes.forEach(hike => {
            parent.appendChild(this.renderOneHike(hike));
        });
    }

    renderOneHike(hike) {
        const item = document.createElement("li");
        item.classList.add("light");
        item.setAttribute("data-name", hike.name);
    
        item.innerHTML = ` <h2>${hike.name}</h2>
            <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div>
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
            </div>`;
    
        return item;
    }

    renderOneHikeFull(parent, hike){
        const item = document.createElement("li");
        const backButton = document.createElement("button");
        backButton.innerHTML = `&lt; - All Hikes`
        
        item.innerHTML = 
            ` <h2>${hike.name}</h2>
                <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
                <div>
                        <div>
                            <h3>Distance</h3>
                            <p>${hike.distance}</p>
                        </div>
                        <div>
                            <h3>Difficulty</h3>
                            <p>${hike.difficulty}</p>
                        </div>
                        <div>
                            <h3>Descriptions</h3>
                            <p>${hike.description}</p>
                        </div>
                        <div>
                            <h3>Directions</h3>
                            <p>${hike.directions}</p>
                        </div>
                </div>`;

        parent.innerHTML = ""
        item.insertBefore(backButton, item.childNodes[0]);
        parent.appendChild(item)

        return backButton;
    }

}

export default Rendering