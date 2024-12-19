const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.40&lon=-86.95&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial';
const tempHigh = document.querySelector('#tempHigh');
const weathIcon = document.querySelector('#weathIcon');
const currentTemp = document.querySelector('#currentTemp');
const humidity = document.querySelector('#humidity');

// Call Weather Info
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function displayResults () {
    const data = await apiFetch();
    // Get icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weathIcon.setAttribute('src', `${iconsrc}`);
    weathIcon.setAttribute('alt', `${data.weather[0].description}`);
    // Get information
    tempHigh.innerHTML = `${data.main.temp_max}`;
    currentTemp.innerHTML = `${data.main.temp} &deg;F`;
    humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;
}

displayResults();


const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.40&lon=-86.95&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial'
const tomorrowIcon = document.querySelector('#tomorrowIcon');
const tomorrowTemp = document.querySelector('#tomorrowTemp');

// Call Forecast Info
async function apiFetchForecast() {
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            return forecastData;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

console.log(apiFetchForecast);

async function displayForecastResults () {
    const forecastData = await apiFetchForecast();
    // Get weather information
    tomorrowTemp.innerHTML = `Tomorrow: ${forecastData.list[3].main.temp} &deg;F`;
}

displayForecastResults();