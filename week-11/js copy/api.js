async function weatherInfo() {
    const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg,83440&appid=c11a593471720ea004ec8126ba37b91b&units=imperial";
    const response = await fetch(requestURL);
    const data = await response.json()
    console.log(data)
        // if (response.status == 200) {
        //     return data
        // } else {
        //     throw new error("Error:" + response.status);
        // }
}
weatherInfo()

console.log('Hi')