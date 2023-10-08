const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')

// Add click listener
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});