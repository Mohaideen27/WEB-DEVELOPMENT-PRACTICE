console.log("Lets start working on Javascript");
let currentSong = new Audio();
let songs;
function formatTime(seconds) {
  // Ensure we are working with a positive number
  let totalSeconds = Math.floor(seconds);

  let minutes = Math.floor(totalSeconds / 60);
  let remainingSeconds = totalSeconds % 60;

  // Use .padStart to ensure the seconds always show two digits
  let formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${minutes}:${formattedSeconds}`;
}
async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/%5Csongs%5C")[1]);
    }
  }
  return songs;
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/songs/" + track);
  currentSong.src = "/songs/" + track;
  if (!pause) {
    currentSong.play();
  }
  play.src = "pause.svg";
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00/00:00";
};

async function main() {
  songs = await getSongs();
  playMusic(songs[0], true);

  let songUL = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];

  for (const song of songs) {
    songUL.innerHTML =
      songUL.innerHTML +
      `<li>
                <img
                  class="invert"
                  src="media-player-music-music-symbol.svg"
                  alt=""
                />
                <div class="info">
                  <div>${song.replaceAll("%20", " ")}</div>
                  <div>Song Artist</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img
                    class="invert"
                    src="media-player-ui-button-play.svg"
                    alt=""
                  />
                </div>
              </li>`;
  }

  // ATTACH AN EVENT LISTENER TO EACH SONG

  Array.from(
    document.querySelector(".songlist").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML);
    });
  });

  // var audio = new Audio(songs[0]);
  // audio.play();
  // audio.addEventListener("loadeddata", () => {
  //   let duration = audio.duration;
  //   console.log(duration);
  // });

  // ATTACH AN EVENT LISTENER TO PLAY, NEXT AND PREVIOUS
  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "pause.svg";
    } else {
      currentSong.pause();
      play.src = "media-player-ui-button-play.svg";
    }
  });

  // LISTEN FOR TIMEUPDATE EVENT
  currentSong.addEventListener("timeupdate", () => {
    document.querySelector(".songtime").innerHTML =
      `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // ADD AN EVENT LISTENER TO MOVE THE SEEKBAR CIRCLE
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });
}

// ADD AN EVENT LISTENER FOR HAMBURGER
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".left").style.left = "0%";
});
document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".left").style.left = "-120%";
});
// ADD AN EVENT LISTENER TO PREVIOUS AND NEXT
previous.addEventListener("click", () => {
  console.log("previous clicked");
  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
  console.log(songs, index);
  if (index - 1 > 0) {
    playMusic(songs[index - 1]);
  }
});

next.addEventListener("click", () => {
  console.log("next clicked");
  let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
  console.log(songs, index);
  if (index + 1 < songs.length) {
    playMusic(songs[index + 1]);
  }
});

main();
