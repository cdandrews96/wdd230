const rentalsUrl = 'https://cdandrews96.github.io/wdd230/scoots/data/rental.json';
const cards = document.querySelector('#rentalCards');

async function getRentalData() {
    const response = await fetch(rentalsUrl);
    const data = await response.json();
    // console.table(data.members);
    displayRentals(data.rentals);
}

getRentalData();