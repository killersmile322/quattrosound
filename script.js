// Скролл
const navButtons = document.querySelectorAll('.nav-btn');
const upButton = document.querySelector('.up-button');

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
        // Поменять условие 'if' на navBtn.onclick 
        if (i === 0) {
            window.scrollTo(0, 2066.5);  
        } else {
            window.scrollTo(0, 3472.5);  
        }
    });   

}

// Музыкальный плеер

// Спросить почему коллекция не работает из другого файла... РАБОТАЕТ(важен порядок добавления js файлов)


let currentMusic = 0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name') ;
const musicBackground = document.querySelector('.music-background') ;
// const currentTime;
// const musicDuration;
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backBtn = document.querySelector('.back-btn');

playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
    } else {
        music.pause();
    }
    // playBtn.classList.toggle('pause-btn');
    playBtn.classList.toggle('pause');
    

});

const setMusic = (i) => {
    // console.log(currentMusic)
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    musicBackground.style.backgroundImage = `url('${song.background}')`;

    setTimeout(() => {
        seekBar.max = music.duration;
        // musicDuration.innerHTML = music.duration;

    }, 300);
}

setMusic(0)

setInterval(() => {
    seekBar.value = music.currentTime;
    if(music.currentTime == seekBar.max ) {
        forwardBtn.click();
    }
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    // console.log(currentMusic + 'now')
    // console.log(songs.length + 'dlina')
}

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1) {       
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
    
})

backBtn.addEventListener('click', () => {
    if(currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})



