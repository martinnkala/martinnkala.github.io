async function getDadJoke(){
    const url = 'https://icanhazdadjoke.com';
    let h = new Headers({
        "Accept"     : "application/json",
        "User-Agent" : "WDD 230 Test User Agent http://martinnkala.github.io"
    });
    const response = await fetch(url, {headers:h});
    if (response.status == 200){
        return response.json();
    }
    else{
        throw new error ("No dad Jokes found"+response.status);
    }
}
function newJoke(){
    const dad_id = document.querySelector("#dad-joke");
    dad_id.innerHTML = "";
    
    const joke =getDadJoke()
    .then(
        function(j){
            console.log(j);
            dad_id.innerHTML = j['joke'];
            if (j['joke'].length>85){
                dad_id.classList.add('small');
            }
        }
    )
    .catch(function(e){
        dad_id.innerHTML = e;
    })
}




window.addEventListener('load', (event)=>{
    newJoke();
})