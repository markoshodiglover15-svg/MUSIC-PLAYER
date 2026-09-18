const playButton = document.getElementById("play");
const album = document.querySelector(".album");

const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

const currentTime = document.getElementById("currentTime");

let playing = false;
let progressValue = 35;


/* =========================
   PLAY / PAUSE
========================= */

playButton.addEventListener("click", function () {

    playing = !playing;

    if (playing) {

        playButton.innerHTML = "❚❚";

        album.classList.add("playing");

        startProgress();

    } else {

        playButton.innerHTML = "▶";

        album.classList.remove("playing");

        stopProgress();

    }

});


/* =========================
   PROGRESS
========================= */

let timer;

function startProgress() {

    timer = setInterval(function () {

        if (progressValue >= 100) {

            progressValue = 0;

        } else {

            progressValue += 0.2;

        }

        progress.style.width = progressValue + "%";

        updateTime();

    }, 100);

}


function stopProgress() {

    clearInterval(timer);

}


/* =========================
   UPDATE TIME
========================= */

function updateTime() {

    const totalSeconds = 228;

    const seconds =
        Math.floor(
            (progressValue / 100) * totalSeconds
        );

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    currentTime.textContent =
        minutes +
        ":" +
        String(remainingSeconds).padStart(2, "0");
}


/* =========================
   CLICK PROGRESS BAR
========================= */

progressBar.addEventListener("click", function (event) {

    const width = progressBar.clientWidth;

    const clickX =
        event.offsetX;

    progressValue =
        (clickX / width) * 100;

    progress.style.width =
        progressValue + "%";

    updateTime();

});


/* =========================
   VOLUME
========================= */

const volume = document.querySelector(".volume input");

volume.addEventListener("input", function () {

    console.log(
        "Volume:",
        volume.value
    );

});


/* =========================
   NEXT / PREVIOUS
========================= */

document
    .getElementById("next")
    .addEventListener("click", function () {

        progressValue = 0;

        progress.style.width = "0%";

        currentTime.textContent = "0:00";

    });


document
    .getElementById("previous")
    .addEventListener("click", function () {

        progressValue = 0;

        progress.style.width = "0%";

        currentTime.textContent = "0:00";

    });