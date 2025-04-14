const songs = [
    { 
        name: 'Струнный квартет',
        path: 'music/Эдвард_Григ_Струнный_квартет_соль_минор_Op_27.mp3',
        artist: 'Григ',
        background: 'images/player/grieg.jpg',
    },
    {
        name: 'Струнный квартет',
        path: 'music/Y2mate.mx - Alexander Borodin - String Quartet No. 1 (128 kbps).mp3',
        artist: 'Бородин',
        background: 'images/player/borodin.jpg',
    },
    {
        name: 'Элегическое трио',
        path: 'music/Y2mate.mx - Rachmaninov - Trio élégiaque no. 2, op. 9 (Audio+Sheet) [Kogan_Luzanov_Svetlanov] (128 kbps).mp3',
        artist: 'Рахманинов',
        background: 'images/player/Raxmaninov.jpg',
    },
];

let currentMusic = 0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist-name');
const musicBackground = document.querySelector('.music-background');
// const currentTime;
// const musicDuration;
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backBtn = document.querySelector('.back-btn');

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
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
};

setMusic(0);

setInterval(() => {
    seekBar.value = music.currentTime;
    if (music.currentTime == seekBar.max) {
        forwardBtn.click();
    }
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
});

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    // console.log(currentMusic + 'now')
    // console.log(songs.length + 'dlina')
};

forwardBtn.addEventListener('click', () => {
    if (currentMusic >= songs.length - 1) {
        currentMusic = 0;
    } else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
});

backBtn.addEventListener('click', () => {
    if (currentMusic <= 0) {
        currentMusic = songs.length - 1;
    } else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
});

const interactiveSongsContainer = document.getElementById(
    'interactive-songs-container'
);
const fillInteractoveSongsContainer = () => {
    songs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        songItem.innerHTML = `
            <span class="song-item-index">${index + 1}</span>
            <img src="${song.background}" />
            <span class="song-item-title">${song.name}</span>
            <span class="song-item-author">${song.artist}</span>
        `;
        songItem.onclick = (e) => {
            setMusic(index);
            if (playBtn.className.includes('pause')) {
                music.play();
            } else {
                music.pause();
            }
            // playBtn.classList.toggle('pause-btn');
            
            // playMusic();
            playBtn.classList.toggle('pause');
        };
        interactiveSongsContainer?.appendChild(songItem);
    });
};
fillInteractoveSongsContainer();
