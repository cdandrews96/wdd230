window.addEventListener('load', () => {
    const year = document.getElementById('currentYear');
    year.innerHTML = new Date().getFullYear();
});