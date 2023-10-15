// const mainnav = document.querySelector('#nav')
const mode = document.querySelector('.switch');




var root = document.querySelector(":root");


function darkMode() {
  root.style.setProperty("--primary-color", "#222222");
  root.style.setProperty("background-color", "#222222");
  root.style.setProperty("--background_color", "#222222");
  root.style.setProperty("--accent2-color", "#ffffff");
}

function lightMode() {
  root.style.setProperty("--primary-color", "#2bb39a");
  root.style.setProperty("background-color", "#ffffff");
  root.style.setProperty("--background_color", "#ffffff");
  root.style.setProperty("--accent2-color", "#000000");
}


mode.addEventListener('click', () => {
	// mainnav.classList.toggle('hide');
    mode.classList.toggle("hide")
    if (mode.classList.contains("hide")) {
        darkMode();
      } else {
        lightMode();
      }
});