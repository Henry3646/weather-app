
const temp = document.getElementById('temp')
const feelslike = document.getElementById('feelslike')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const loca = document.getElementById('location')
let city = 'minneapolis'

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0a6d8399d56a937c512b420da7a2f9fb`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData)

    temp.textContent = Math.floor(KtoF(weatherData.main.temp))
    feelslike.textContent = 'Feels like - ' + Math.floor(KtoF(weatherData.main.feels_like))
    wind.textContent = 'Wind - ' + weatherData.wind.speed + ' mph'
    humidity.textContent = 'Humidity - ' + weatherData.main.humidity + '%'
    loca.textContent = weatherData.name + ', ' + weatherData.sys.country
}


function KtoF(K) {
    return (1.8 * (K-273) + 32);
}

window.onload = () => {
    getWeather('london')}