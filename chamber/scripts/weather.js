const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.88&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial';
const weatherIcon = document.querySelector('#weathIcon');
const temperature = document.querySelector('#temp');
const weatherDesc = document.querySelector('#description');

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
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
    // Get information
    temperature.innerHTML = `${data.main.temp} &deg;F`;
    weatherDesc.innerHTML = `${data.weather[0].description}`;
}

displayResults();

//Forecast
const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.88&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial`
const iconDay1 = document.querySelector('#day1');
const weathDayOne = document.querySelector('#tempDayOne');
const weathDayTwo = document.querySelector('#tempDayTwo');
const weathDayThree = document.querySelector('#tempDayThree');

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

async function displayForecastResults () {
    const forecastData = await apiFetchForecast();
    // Get icon
    weathDayOne.innerHTML = `<strong>Tomorrow:</strong> ${forecastData.list[2].main.temp} &deg;F`;
    weathDayTwo.innerHTML = `<strong>Next day:</strong> ${forecastData.list[10].main.temp} &deg;F`;
    weathDayThree.innerHTML = `<strong>Day after:</strong> ${forecastData.list[18].main.temp} &deg;F`;
}

displayForecastResults();