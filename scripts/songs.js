const songs = [
    {
        name: "Скелетики",
        path: "https://cdn.jsdelivr.net/gh/killersmile322/quattrosound@develop/music/Andrew%20Gold%20-%20Spooky%20scary%20skeletons%20(mlg%20edit)2.mp3",
        artist: "Andrew Gold",
        background: "images/player/skeletons.jpg",
    },
    {
        name: "Песня девочки",
        path: "https://cdn.jsdelivr.net/gh/killersmile322/quattrosound@develop/music/Noga%20Erez%20-%20Dance%20while%20You%20Shoot.mp3",
        artist: "Noga Erez",
        background: "images/player/Noga-Erez.jpeg",
    },
    {
        name: "НАРУТО!",
        path: "https://cdn.jsdelivr.net/gh/killersmile322/quattrosound@develop/music/Akatsuki%20Theme%20-%20Pain.mp3",
        artist: "Akatsuki",
        background: "images/player/naruto-pain.jpg",
    },
];

const audioElement = document.querySelector("#audio");
const playButton = document.querySelector("#play-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");

let audioContext;
let track;

// If track ends
audioElement.addEventListener(
    "ended",
    () => {
        console.log("ended");
        playButton.dataset.playing = "false";
    },
    false
);

audioElement.addEventListener(
    "pause",
    () => {
        console.log("paused");
        playButton.dataset.playing = "false";
    },
    false
);

audioElement.addEventListener(
    "play",
    () => {
        console.log("played");
        playButton.dataset.playing = "true";
    },
    false
);

playButton.onclick = () => {
    if (!audioContext) {
        init();
    }
    if (playButton.dataset.playing === "false") {
        audioElement.play();
    } else {
        audioElement.pause();
    }
};
prevButton.onclick = () => {
    const currentSongIndex = +audioElement.dataset.activeSongIndex;
    if (currentSongIndex > 0) {
        setMusic(currentSongIndex - 1);
        audioElement.play();
    } else {
        setMusic(songs.length - 1);
        audioElement.play();
    }
};
nextButton.onclick = () => {
    const currentSongIndex = +audioElement.dataset.activeSongIndex;
    if (currentSongIndex < songs.length - 1) {
        setMusic(currentSongIndex + 1);
        audioElement.play();
    } else {
        setMusic(0);
        audioElement.play();
    }
};

const interactiveSongsContainer = document.getElementById(
    "interactive-songs-container"
);
const fillInteractoveSongsContainer = () => {
    songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.innerHTML = `
        <span class="song-item-index">${index + 1}</span>
        <img src="${song.background}" />
        <span class="song-item-title">${song.name}</span>
        <span class="song-item-author">${song.artist}</span>
        `;
        songItem.onclick = (e) => {
            if (!audioContext) {
                init();
            }
            // check if context is in suspended state (autoplay policy)
            if (audioContext.state === "suspended") {
                audioContext.resume();
            }

            // если кликнули на текущую песню
            if (+audioElement.dataset.activeSongIndex === index) {
                if (playButton.dataset.playing === "false") {
                    audioElement.play();
                    audioElement.dataset.activeSongIndex = index;
                } else {
                    audioElement.pause();
                }
            } else {
                setMusic(index);
                audioElement.play();
            }
        };
        interactiveSongsContainer?.appendChild(songItem);
    });
};
fillInteractoveSongsContainer();

function init() {
    console.log("init");
    audioContext = new AudioContext();
    track = audioContext.createMediaElementSource(audioElement);

    // Create the node that controls the volume.
    const gainNode = new GainNode(audioContext);

    const volumeControl = document.querySelector("#volume");

    volumeControl.addEventListener(
        "input",
        () => {
            gainNode.gain.value = volumeControl.value;
        },
        false
    );

    track.connect(gainNode).connect(audioContext.destination);
}
