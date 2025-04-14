const phone = document.getElementById('phone-field');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};
const mask = IMask(phone, maskOptions);

// Скролл
const navButtons = document.querySelectorAll('.nav-btn');
const upButton = document.querySelector('.up-button');

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        upButton.classList.add('shown');
        //   console.log(pageYOffset)
    } else {
        upButton.classList.remove('shown');
    }
};
upButton.onclick = function () {
    window.scrollTo(0, 0);
};

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', function () {
        // Поменять условие 'if' на navBtn.onclick
        if (i === 0) {
            window.scrollTo(0, 2066.5);
        } else {
            window.scrollTo(0, 3472.5);
        }
    });
}

// Музыкальный плеер



// Форма

const form = document.querySelector('form'),
    formButtons = form.querySelectorAll('.title-btn'),
    allInputs = form.querySelectorAll('input'),
    submitBtn = form.querySelector('.submit-btn');
const fieldsOne = document.querySelector('.fields-one');
const fieldsTwo = document.querySelector('.fields-two');

// console.log(fieldsOne)

for (let i = 0; i < formButtons.length; i++) {
    formButtons[i].addEventListener('click', () => {
        if (i === 1) {
            fieldsOne.classList.remove('active');
            fieldsTwo.classList.add('active');
        } else if (i === 0){
            fieldsTwo.classList.remove('active');
            fieldsOne.classList.add('active');
        } else {
            fieldsTwo.classList.remove('active');
            fieldsOne.classList.remove('active');
        }
    })
}


