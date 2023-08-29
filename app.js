const container = document.querySelector(".container");
const input = document.querySelector(".input");
const city = document.querySelector(".city-name");
const celcius = document.querySelector(".celcius");
const info = document.querySelector(".weather-info");
const video = document.querySelector("#videos");

const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'a8e53279fc6acccd746074f6d34da4e4';

const videoDecider = {
    "clear sky" : "sun.mp4",
    "overcast clouds" : "cloud.mp4",
    "broken clouds" : "cloud.mp4",
    "few clouds" : "cloud.mp4",
    "scattered clouds" : "cloud.mp4",
    "haze" : "haze.mp4",
    "light rain" : "rain.mp4",
    "light intensity shower rain" : "rain.mp4",
    "moderate rain" : "rain.mp4"
}

const setQuery = (e) =>{
    if(e.keyCode == 13){
        getResult(input.value)
    }
}

const getResult = (cityName) =>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{
    city.innerText = `${result.name},${result.sys.country}`
    celcius.innerText = `${Math.round(result.main.temp)} ° C` 
    info.innerText = result.weather[0].description;
    const videoPath = `./videos/${videoDecider[result.weather[0].description]}`
    video.setAttribute("src",videoPath) 
}


input.addEventListener('keypress', setQuery)



