const songs = [
    {
        name: "Скелетики",
        path: "music/Andrew Gold - Spooky scary skeletons (mlg edit)2.mp3",
        artist: "Andrew Gold",
        background: "images/player/skeletons.jpg",
    },
    {
        name: "Песня девочки",
        path: "music/Noga Erez - Dance while You Shoot.mp3",
        artist: "Noga Erez",
        background: "images/player/Noga-Erez.jpeg",
    },
    {
        name: "НАРУТО!",
        path: "music/Akatsuki Theme - Pain.mp3",
        artist: "Akatsuki",
        background: "images/player/naruto-pain.jpg",
    },
];

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
            setMusic(index);
            if (playBtn.className.includes("pause")) {
                music.play();
            } else {
                music.pause();
            }
            // playBtn.classList.toggle('pause-btn');
            playBtn.classList.toggle("pause");
        };
        interactiveSongsContainer?.appendChild(songItem);
    });
};
fillInteractoveSongsContainer();
