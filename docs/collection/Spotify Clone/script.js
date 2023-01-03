//initialize the variables
let SongIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let SongItems = Array.from(document.getElementsByClassName('SongItem'));
let Songs = [
    { SongName: "Warriyo - Mortals", FilePath: "songs/1.mp3", CoverPath: "covers/1.jpg" },
    { SongName: "Cielo - Huma-Huma", FilePath: "songs/2.mp3", CoverPath: "covers/2.jpg" },
    { SongName: "DEAF KEV - Invincible", FilePath: "songs/3.mp3", CoverPath: "covers/3.jpg" },
    { SongName: "Different Heaven & EH!DE", FilePath: "songs/4.mp3", CoverPath: "covers/4.jpg" },
    { SongName: "Janji-Heroes-Tonight", FilePath: "songs/5.mp3", CoverPath: "covers/5.jpg" },
    { SongName: "Rabba - Salam-e-Ishq", FilePath: "songs/6.mp3", CoverPath: "covers/6.jpg" },
    { SongName: "Sakhiyaan - Salam-e-Ishq", FilePath: "songs/7.mp3", CoverPath: "covers/7.jpg" },
    { SongName: "Bhula Dena - Salam-e-Ishq", FilePath: "songs/8.mp3", CoverPath: "covers/8.jpg" },
    { SongName: "Tumhari Kasam - Salam-e-Ishq", FilePath: "songs/9.mp3", CoverPath: "covers/9.jpg" },
    { SongName: "Na Jaana - Salam-e-Ishq", FilePath: "songs/10.mp3", CoverPath: "covers/10.jpg" },
]


SongItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = Songs[i].CoverPath;
    element.getElementsByClassName("SongName")[0].innerText = Songs[i].SongName;
    // element.getElementsByClassName("TimeStamp")[0].innerText = Songs[i].SongName;
})

const makegifstop = () => {
    Array.from(document.getElementsByClassName('gif')).forEach((element) => {
        element.style.opacity = 0
    })
}
const MakeAllPlays = () => {
        Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    }
    // Handle Play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        var gift = document.getElementById(`gift${SongIndex}`);
        var changes = document.getElementById(`${SongIndex}`);
        changes.classList.remove('fa-circle-play');
        changes.classList.add('fa-circle-pause');
        gift.style.opacity = 1;

    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        var gift = document.getElementById(`gift${SongIndex}`);
        var changes = document.getElementById(`${SongIndex}`);
        changes.classList.remove('fa-circle-pause');
        changes.classList.add('fa-circle-play');
        gift.style.opacity = 0;
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seek bar
    var progess = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progess
    if (progess >= 100) {
        if (SongIndex >= 9) {
            SongIndex = 0;
            var removed = document.getElementById('9');
            removed.classList.remove('fa-circle-pause');
            removed.classList.add('fa-circle-play');
        } else {
            SongIndex += 1;
            var removed = document.getElementById(`${SongIndex-1}`);
            removed.classList.remove('fa-circle-pause');
            removed.classList.add('fa-circle-play');
        }
        masterSongName.innerText = Songs[SongIndex].SongName
        audioElement.src = `songs/${SongIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        makegifstop();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        var changes = document.getElementById(`${SongIndex}`);
        changes.classList.remove('fa-circle-play');
        changes.classList.add('fa-circle-pause');
        var gift = document.getElementById(`gift${SongIndex}`);
        gift.style.opacity = 1;
    }
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused || audioElement.currentTime <= 0) {
            SongIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${SongIndex+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterSongName.innerText = Songs[SongIndex].SongName
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            var gift = document.getElementById(`gift${SongIndex}`);
            gift.style.opacity = 1;
        } else {
            MakeAllPlays();
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            var gift = document.getElementById(`gift${SongIndex}`);
            gift.style.opacity = 0;
        }


    })
})
document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >= 9) {
        SongIndex = 0;
    } else {
        SongIndex += 1;
    }
    masterSongName.innerText = Songs[SongIndex].SongName
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    var gift = document.getElementById(`gift${SongIndex}`);
    gift.style.opacity = 1;
})
document.getElementById('previous').addEventListener('click', () => {
    if (SongIndex <= 0) {
        SongIndex = 0;
    } else {
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = Songs[SongIndex].SongName
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    var gift = document.getElementById(`gift${SongIndex}`);
    gift.style.opacity = 1;
})