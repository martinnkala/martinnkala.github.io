const URL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject["towns"];

        //Create elements and content
        for (let i = 0; i < towns.length; i++) {
            if (
                towns[i].name == "Fish Haven" //towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"
            ) {
                let container = document.createElement("eventContainer");
                let event1 = document.createElement("p");
                let event2 = document.createElement("p");
                let event3 = document.createElement("p");
                let event4 = document.createElement("p");

                //Create content
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];
                event4.textContent = towns[i].events[3];

                //Put elements in section
                container.appendChild(event1);
                container.appendChild(event2);
                container.appendChild(event3);
                container.appendChild(event4);
                document.querySelector("div.events").appendChild(container);
            }
        }
    });