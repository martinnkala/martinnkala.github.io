window.addEventListener("load", () => {
    const requestURL = "json/temple.json";
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);
            });
        });
});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2> ${temple.name} </h2> 
    <img src = '${temple.imageurl}' alt='${temple.name}' >
    
    <p>This is the: <b>${temple.name[0]}</b> </p>
    `;
    document.querySelector("#temples").appendChild(card);
}