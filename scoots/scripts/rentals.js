const rentalsUrl = 'https://cdandrews96.github.io/wdd230/scoots/data/rental.json';
const cards = document.querySelector('#rentalCards');

async function getRentalData() {
    const response = await fetch(rentalsUrl);
    const data = await response.json();
    // console.table(data.rentals);
    displayRentals(data.rentals);
}

getRentalData();

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let type = document.createElement('h3');
        let max = document.createElement('p');
        let reservation = document.createElement('h4');
        let halfR = document.createElement('p');
        let fullR = document.createElement('p');
        let walkIn = document.createElement('h4');
        let halfW = document.createElement('p');
        let fullW = document.createElement('p');

        image.setAttribute('src', rental.image);
        image.setAttribute('alt', `${rental.rentaltype}`);
        image.setAttribute('loading', 'lazy');
        type.textContent = `${rental.rentaltype}`;
        max.textContent = `Max persons: ${rental.max}`;
        reservation.textContent = `Reservation:`;
        halfR.textContent = `Half Day - ${rental.halfr}`;
        fullR.textContent = `Full Day - ${rental.fullr}`;
        walkIn.textContent = `Walk-In:`;
        halfW.textContent = `Half Day - ${rental.halfw}`;
        fullW.textContent = `Full Day - ${rental.fullw}`;

        card.appendChild(image);
        card.appendChild(type);
        card.appendChild(max);
        card.appendChild(reservation);
        card.appendChild(halfR);
        card.appendChild(fullR);
        card.appendChild(walkIn);
        card.appendChild(halfW);
        card.appendChild(fullW);

        card.appendChild(card);
    });
}