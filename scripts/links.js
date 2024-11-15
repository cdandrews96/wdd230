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
        list.textContent = `${lesson}: `;
        links.forEach((link) => {
            const url = link.url;
            const title = link.title;
            const content = ""
            const anchor = document.createElement('a');
            anchor.setAttribute('href', url);
            anchor.textContent = `${title}`;
            list.appendChild(anchor)
        });
        console.log(list)
        activities.appendChild(list);
    });
}