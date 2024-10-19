const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const link = `https://www.churchofjesuschrist.org/search?facet=scriptures&lang=eng&query=${input.value}&page=1`
        li.innerHTML = `<a href=${link}>${input.value}</a>`;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
});