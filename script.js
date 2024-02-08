const apiKey = "b79b7f6f47738dee4fa23ee28bceb13f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkweather(city){
    const response=await fetch(apiUrl +city+ '&appid=${apikey}');

    if(response.status==404){
        document.querySelector("error").computedStyleMap.display="block";
        document.querySelector("weather").computedStyleMap.display="none";
    }
    else{
        var data=await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector("temp").innerHTML = Math.round(data.main.temp)+"°c";
        document.querySelector("humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";

        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").computedStyleMap.display = "block";
        document.querySelector("error").computedStyleMap.display = "none";
     }
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})