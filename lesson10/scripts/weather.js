const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=3aa3bb156d506476387dc30b596a71b9';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults (data) {
    currentTemp.innerHTML = `${data.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', `${data.iconsrc}`);
    weatherIcon.setAttribute('alt', `${data.main}`);
    captionDesc.textContent = `${desc}`;
}