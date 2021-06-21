const requestURL = " https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject["towns"];

        let filterdtown = towns.filter(
            (town) =>
            town.name == "Fish Haven" ||
            town.name == "Preston" ||
            town.name == "Soda Springs"
        );
        console.log(filterdtown);
        for (let i = 0; i < filterdtown.length; i++) {
            // let container = document.createElement("div");
            let places = document.createElement("div");
            console.log(places)
            let h2 = document.createElement("h2");
            let h4 = document.createElement("h4");
            let image = document.createElement("img");
            let year = document.createElement("p");
            let population = document.createElement("p");
            let rainfall = document.createElement("p");

            h2.textContent = filterdtown[i].name;
            h4.textContent = filterdtown[i].motto;
            year.textContent = filterdtown[i].yearFounded;
            population.textContent = filterdtown[i].currentPopulation;
            rainfall.textContent = filterdtown[i].averageRainfall;

            places.classList.add("places");
            if (i == 1) {
                h2.classList.add("reverse-right");
                h4.classList.add("reverse-right");
                population.classList.add("reverse-right");
                rainfall.classList.add("reverse-right");
                year.classList.add("reverse-right");
                image.classList.add("reverse-left");
            }
            let container = document.querySelector('.container')
            places.appendChild(h2);
            places.appendChild(h4);
            places.appendChild(year);
            places.appendChild(population);
            places.appendChild(rainfall);
            places.appendChild(image);
            container.appendChild(places);

            // document.querySelector("div.container").appendChild(container);
            image.setAttribute("src", "images/" + filterdtown[i].photo);


            h2.innerHTML = filterdtown[i].name;
            h4.innerHTML = filterdtown[i].motto;
            year.innerHTML = "Year Founded: " + filterdtown[i].yearFounded;
            population.innerHTML = "Population: " + filterdtown[i].currentPopulation;
            rainfall.innerHTML =
                "Annual Rain Fall: " + filterdtown[i].averageRainfall;
            // image.innerHTML = towns[i].photo;
        }
    });