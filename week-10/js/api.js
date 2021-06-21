async function WeatherInfo() {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg,83440&appid=c11a593471720ea004ec8126ba37b91b&unit=imperial";
    const response = await fetch(url);
    if (response.status == 200) {
        return response.json
    } else {
        throw new error("Error:" + response.status);
    }
}

function retrieveWeather() {
    const weather = WeatherInfo()
        .then(function(Rexburgweather) {
            console.log(retrieveWeather);
        });
}
window.addEventListener('load', WeatherInfo());