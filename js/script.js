/* const differentColor = document.getElementsByClassName('section-title');
for (item of differentColor) {
    item.style.color = 'green';
}
 */



const differentColor = document.getElementsByTagName('h2');
for (item of differentColor) {
    item.style.color = 'green';
}

/* const backColor = document.getElementById('top-player');
backColor.style.backgroundColor = 'rgba(154, 210, 234, 1)'; */

const backColor = document.getElementsByClassName('top-player');
for (item of backColor) {
    item.style.backgroundColor = 'rgba(154, 210, 234, 1)';
}

// set li by user input

function addLi() {
    let inputText = document.getElementById('text-input').value;
    let list = document.getElementById('ul-list');
    if (inputText.length <= 0) return;

    let liText = document.createElement('li');
    liText.innerText = inputText;
    list.appendChild(liText);
    inputText.value = '';

    if (list.childNodes.length >= 5) {
        let addButton = document.getElementById('add-button');
        addButton.setAttribute("disabled", true);
        addButton.style.background = "#6a916a57";
    }
}
