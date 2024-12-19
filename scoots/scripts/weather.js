const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.40&lon=-86.95&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial';
const tempHigh = document.querySelector('#tempHigh');
const weathIcon = document.querySelector('#weathIcon');
const currentTemp = document.querySelector('#currentTemp');
const humidity = document.querySelector('#humidity');
const tomorrowIcon = document.querySelector('#tomorrowIcon');
const tomorrowTemp = document.querySelector('#tomorrowTemp');

// Call Forecast Info
async function apiFetchForecast() {
    try {
        const response = await fetch(url);
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

async function displayForecastResults () {
    const forecastData = await apiFetchForecast();
    // Get weather information
    const ticonsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    tomorrowIcon.setAttribute('src', `${ticonsrc}`);
    tomorrowIcon.setAttribute('alt', `${data.weather[0].description}`);
    tomorrowTemp.innerHTML = `${forecastData.list[3].main.temp} &deg;F`;
}

displayForecastResults();