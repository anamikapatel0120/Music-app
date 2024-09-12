// http://wesbos.com
let img = document.getElementsByClassName("img");
let sliderContainer = document.getElementsByClassName("slider-container");
let audio = document.querySelector("audio");
let songName = document.querySelector(".songname");
let singerName = document.querySelector(".singername");
let playBtn = document.getElementById("playbtn");
let PlayIcon = document.getElementsByClassName("fa-play");
let myRange = document.getElementById("myRange");
let back = document.getElementById("back");
let Music1 = document.getElementsByClassName("Music1")[0];
let Music2 = document.getElementsByClassName("Music2")[0];
let audio1 = document.getElementsByClassName("audio1")[0];
let audio2 = document.getElementsByClassName("audio2")[0];


let turn = true;
myRange.value = 0;

function playpauseSong() {
    playBtn.addEventListener("click", () => {
        if (turn == true) {
            playBtn.classList.remove("fa-play");
            playBtn.classList.add("fa-pause");
            audio.play();
            turn = false;
        } else {
            playBtn.classList.remove("fa-pause");
            playBtn.classList.add("fa-play");
            audio.pause();
            turn = true;
        }
    })
}
playpauseSong();

if (audio.played) {
    setInterval(() => {
        myRange.value = audio.currentTime;
    }, 500);
};

myRange.onchange = function () {
    audio.play();
    myRange.max = audio.duration;
    audio.currentTime = myRange.value;
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

let next = 1;
function changeSong() {
    back.addEventListener("click", () => {
        if (next == 1) {
            Music1.classList.add("hide");
            Music2.classList.remove("hide");
            songName.innerText = "Pehle Bhi Main";
            singerName.innerText = "Raj Shekhar and Vishal Mishra";
            audio.pause();  // Pause the current audio
            audio.src = "audio2.mp3";  // Set the new source
            audio.load();  // Load the new source
            // audio.play();  // Play the new audio
            next = 0;
        } else {
            Music2.classList.add("hide");
            Music1.classList.remove("hide");
            songName.innerText = "Papa Meri Jaan";
            singerName.innerText = "Sonu Nigam";
            audio.pause();  // Pause the current audio
            audio.src = "audio1.mp3";  // Set the new source
            audio.load();  // Load the new source
            // audio.play();  // Play the new audio
            next = 1;
        }
    })
};
changeSong();

