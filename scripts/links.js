const baseURL = "https://cdandrews96.github.io/wdd230/"
const linksURL = "https://cdandrews96.github.io/wdd230/data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
}

getLinks();