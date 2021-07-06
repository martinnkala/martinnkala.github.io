window.addEventListener("load", () => {
    const requestURL = "json/temples2.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject)
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple)
            });
        });

});

function buildTempleCard(temple) {
    console.log(temple);
    let card = document.createElement('section');
    card.classList.add('temple');
    card.innerHTML = `<h2> ${ temple.name } </h2> 
    <img src = '${temple.imageurl}' alt='${temple.name}' >
    
    <p>First President: <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b> </p>
    <p> Current President: <b>${temple.presidents[temple.presidents.length-1]} 1st of ${temple.presidents.length}</b> </p>
    `
    document.querySelector('#temples').appendChild(card);

}