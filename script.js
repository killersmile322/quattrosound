const navButton = document.querySelector('.nav-btn');
console.log(navButton);

navButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('Клик по кнопке');
    
});

