// Functie changeColour
const changeColour = function(target) {
    target.classList.toggle('red-background');
}

// Opdracht 1
const button = document.getElementById("mybutton");

button.addEventListener('click', function() {
    console.log('click!');
});

// Opdracht 2 & 3
const backgroundbutton = document.getElementById('background-button');
const body = document.querySelector('.blue-background');

backgroundbutton.addEventListener('click', function() {
    changeColour(body);
});



