console.log("Lets start working on Javascript");
let currentSong = new Audio();
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

const playMusic = (track) => {
  // let audio = new Audio("/songs/" + track);
  currentSong.src = "/songs/" + track;
  currentSong.play();
  play.src = "pause.svg";
};

async function main() {
  let songs = await getSongs();
  console.log(songs);

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
}
main();
