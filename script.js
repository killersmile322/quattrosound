const navButtons = document.querySelectorAll('.nav-btn');
const upButton = document.querySelector('.up-button');
// console.log(navButton)


window.onscroll = function () {
    if (window.pageYOffset > 200) {
      upButton.classList.add('shown');
    //   console.log(pageYOffset)
    }  else {
        upButton.classList.remove('shown');
      }
  };
upButton.onclick = function () {
window.scrollTo(0, 0);
};


for (let i = 0; i < navButtons.length; i++ ) {
    navButtons[i].addEventListener('click', function() {
        console.log('Клик по кнопке' + i);
        if (i === 0) {
            window.scrollTo(0, 1817.5);  
        } else {
            window.scrollTo(0, 3022.5);  
        }
    });   

}
// navButton.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     console.log('Клик по кнопке');
//     window.scrollTo(0, 1817.5);
    
// });

let currentMusic = 0;

const music = document.querySelector('#audio');
// const seekBar;
// const songName;
// const artistName;
// const musicBackground;
// const currentTime;
// const musicDuration;
const musicBtn = document.querySelector('.music-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backBtn = document.querySelector('.back-btn');

musicBtn.addEventListener('click', () => {
    musicBtn.classList.toggle('play-btn');
    musicBtn.classList.toggle('pause-btn');

})
