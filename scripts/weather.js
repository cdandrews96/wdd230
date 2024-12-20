const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.88&appid=3aa3bb156d506476387dc30b596a71b9&units=imperial';
const weatherIcon = document.querySelector('#icon');
const temperature = document.querySelector('#temp');

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
    // Getting icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', `${data.weather[0].description}`);
    // Getting weather information
    temperature.innerHTML = `${data.main.temp} &deg;F ${data.weather[0].description}`;
}

displayResults();