const baseURL = "https://cdandrews96.github.io/wdd230/"
const linksURL = "https://cdandrews96.github.io/wdd230/data/links.json"
const activities = document.querySelector('#activity');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.table(data.lessons);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const list = document.createElement('li');
        const lesson = week.lesson;
        const links = week.links;
        counter = 1;
        list.textContent = `${lesson}: `;
        links.forEach((link) => {
            const url = link.url;
            const title = link.title;
            list.innerHTML += `<a href=${url}>${title}</a>`
            counter += 1;
            if (counter <= links.length) {
                list.innerHTML += " | "
            }
            // const anchor = document.createElement('a');
            // anchor.setAttribute('href', url);
            // anchor.textContent = `${title}`;
            // list.appendChild(anchor)
        });
        // console.log(list)
        activities.appendChild(list);
    });
}