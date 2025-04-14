const phone = document.getElementById("phone-field");
const maskOptions = {
    mask: "+{7}(000)000-00-00",
};
const mask = IMask(phone, maskOptions);

// Скролл
const navButtons = document.querySelectorAll(".nav-btn");
const upButton = document.querySelector(".up-button");

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        upButton.classList.add("shown");
        //   console.log(pageYOffset)
    } else {
        upButton.classList.remove("shown");
    }
};
upButton.onclick = function () {
    window.scrollTo(0, 0);
};

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener("click", function () {
        // Поменять условие 'if' на navBtn.onclick
        if (i === 0) {
            window.scrollTo(0, 2066.5);
        } else {
            window.scrollTo(0, 3472.5);
        }
    });
}

// Музыкальный плеер
let currentMusic = 0;

const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const musicBackground = document.querySelector(".music-background");
// const currentTime;
// const musicDuration;

const setMusic = (i) => {
    // console.log(currentMusic)
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    audioElement.src = song.path;
    audioElement.dataset.activeSongIndex = i;
    setTimeout(() => {
        seekBar.max = audioElement.duration;
        // musicDuration.innerHTML = music.duration;
    }, 300);
};

setMusic(0);

setInterval(() => {
    seekBar.value = audioElement.currentTime;
}, 500);

seekBar.addEventListener("change", () => {
    audioElement.currentTime = seekBar.value;
});

// Форма

const form = document.querySelector("form"),
    formButtons = form.querySelectorAll(".title-btn"),
    allInputs = form.querySelectorAll("input"),
    submitBtn = form.querySelector(".submit-btn");
const fieldsOne = document.querySelector(".fields-one");
const fieldsTwo = document.querySelector(".fields-two");

// console.log(fieldsOne)

for (let i = 0; i < formButtons.length; i++) {
    formButtons[i].addEventListener("click", () => {
        if (i === 1) {
            fieldsOne.classList.remove("active");
            fieldsTwo.classList.add("active");
        } else if (i === 0) {
            fieldsTwo.classList.remove("active");
            fieldsOne.classList.add("active");
        } else {
            fieldsTwo.classList.remove("active");
            fieldsOne.classList.remove("active");
        }
    });
}
