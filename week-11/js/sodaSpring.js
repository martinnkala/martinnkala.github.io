const requestURL =
    "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=c11a593471720ea004ec8126ba37b91b&units=imperial";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        // Creating variables for my retrieve data from the Api

        let weathertype = jsonObject.weather[0].main;
        // console.log(jsonObject.weather[0].main);
        let maxTemp = jsonObject.main.temp_max;
        let windspeed = jsonObject.wind.speed;
        console.log(windspeed);
        let normaTemp = jsonObject.main.temp;
        const windChillFactor = (
            35.74 +
            0.6215 * normaTemp -
            35.75 * windspeed ** 0.16 +
            0.4275 * normaTemp * windspeed ** 0.16
        ).toFixed(0);
        let humid = jsonObject.main.humidity;

        // creating variables for my HTML classes and id
        let spanweathertype = document.querySelector(".weathertype");
        let temp = document.getElementById("temperature");
        let speed = document.getElementById("speed");
        let windchill = document.getElementById("measure");
        let hum = document.getElementById("hum");
        // Replacing my HTML data with the Api data
        spanweathertype.textContent = weathertype;
        temp.textContent = maxTemp + " " + "°F";
        speed.textContent = windspeed + " " + "mph";
        windchill.textContent = windChillFactor + " " + "°F";
        hum.textContent = humid + "%";
    });

const fetchurl =
    "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=c11a593471720ea004ec8126ba37b91b&units=imperial";
fetch(fetchurl)
    .then((response) => {
        return response.json();
    })
    .then(function(jsonObject) {
        // console.log(jsonObject);

        let time = jsonObject.list[0].dt_txt.split(" ")[1];
        // console.log(time);
        let filterlist = jsonObject.list;
        // console.log(filterlist);
        let filteredtime = filterlist.filter(
            (time) => time.dt_txt.split(" ")[1] == "18:00:00"
        );
        let datetime = filteredtime.map((element) => element.dt_txt);
        let icon = filteredtime.map((element) => element.weather[0].icon);
        // console.log(datetime);
        // console.log(filteredtime);

        const getDayOfTheWeek = (dateAndTime) => {
            const date = new Date(dateAndTime);
            const utcDate = new Date(date.toUTCString());
            return utcDate.getUTCDay();
        };
        var days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let getdays = datetime.map((element) => getDayOfTheWeek(element));
        let nameOfThedays = getdays.map((element) => days[element]);

        let day = Array.from(document.querySelectorAll(".daoftheweek"));
        let temp = Array.from(document.querySelectorAll(".fiveDayTemp"));
        let img = Array.from(document.querySelectorAll(".Images"));
        console.log(img);

        day.map((element, index) => (element.textContent = nameOfThedays[index]));
        temp.map(
            (element, index) =>
            (element.textContent = filteredtime[index].main.temp + " " + "°F")
        );
        img.map(
            (element, index) =>
            (element.src =
                "https://openweathermap.org/img/w/" + icon[index] + ".png")
        );

        // console.log(nameOfThedays);
    });