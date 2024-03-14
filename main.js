const apiKey = "7fb5a9fe8f49b4cceea2cddb3f863774";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed +" km/h";
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "humidity"){
        weatherIcon.src = "images/humidity.png";
    }
    else if(data.weather[0].main == "mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == "wind"){
        weatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display= "block";
}


searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
})