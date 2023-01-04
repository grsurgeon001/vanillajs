const API_KEY = "7fcd9b8c402d27defc2630eec49b8a25"
const weather_h6 = document.querySelector(".weather h6");
console.log(weather_h6)

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response =>response.json()).then(data =>{
        const city = data.name;
        const weather = data.weather[0].main;
        const temp = data.main.temp;
        weather_h6.innerText = `${weather}/${city}/${temp}°C`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);