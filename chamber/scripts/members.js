const membersUrl = 'https://cdandrews96.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Company logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', 'auto');
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        url.setAttribute('href', `${member.urls}`);
        url.textContent = `${member.name}`;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}