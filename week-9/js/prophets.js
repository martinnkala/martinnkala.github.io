const requestURL =
    "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject["prophets"];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let image = document.createElement("img");
            let paragraph = document.createElement("p");
            let paragraph1 = document.createElement("p");

            h2.textContent = prophets[i].name + " " + prophets[i].lastname;

            card.appendChild(h2);
            card.appendChild(paragraph);
            card.appendChild(paragraph1);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
            image.setAttribute("src", prophets[i].imageurl);
            image.setAttribute(
                "alt",
                prophets[i].name + " " + prophets[i].lastname + "-" + prophets[i].order
            );
            paragraph.innerHTML =
                "Date of birth: " +
                prophets[i].birthdate +
                '<br>' +
                "Place of birth: " +
                prophets[i].birthplace;
        }
    });