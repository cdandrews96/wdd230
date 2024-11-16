const membersUrl = 'https://cdandrews96.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();