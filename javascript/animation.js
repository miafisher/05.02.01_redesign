/*function myFunction() {
  console.log();
  var element = document.body;
  element.classList.toggle("flag-mode");

  if (document.getElementById("flag").src == "danish.svg") {
    document.getElementById("flag").src = "danish.svg";
  } else {
    document.getElementById("flag").src = "usa.svg";

    document.getElementById("flag").src = "usa.svg";
  }
} */

// burgermenu
// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");
// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");
  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");
  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    btn.textContent = "Luk"; // sæt btn.textContent til "Luk", hvis menuShown er "true"
  } else {
    console.log(menuShown); // se i konsollen
    btn.textContent = "Menu"; // sæt btn.textContent til "Menu", hvis menuShown er "false"
  }
  // "toggleMenu()" slutter her
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);

/* Video */

const vidContainer = document.querySelector(".video-player");
const vid = document.querySelector(".video-player video");
const button = document.querySelector(".video-player-button");
vid.playbackRate = 6; // Debug only

function togglePlay() {}
function togglePlay() {
  if (vid.paused) {
    vid.play();
    vidContainer.classList.add("playing");
    button.textContent = "Pause";
  } else {
    vid.pause();
    button.textContent = "Play";
    vidContainer.classList.remove("playing");
  }
}

function videoEnded() {
  if (vidContainer.classList.contains("playing")) {
    vidContainer.classList.remove("playing");
  }
  button.textContent = "Play";
}

button.addEventListener("click", togglePlay);
vid.addEventListener("ended", videoEnded);
