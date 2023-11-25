// const mainnav = document.querySelector('#nav')
const mode = document.querySelector('.switch');




var root = document.querySelector(":root");


function darkMode() {
  root.style.setProperty("--primary-color", "#222222");
  root.style.setProperty("--secondary-color", "#565CA3");
  
  root.style.setProperty("background-color", "#222222");
  root.style.setProperty("--background_color", "#222222");
  root.style.setProperty("--accent2-color", "#ffffff");
  root.style.setProperty("--a-color", "rgb(185, 128, 221)")
  root.style.setProperty("--accent1-color", "#6a282e");
}

function lightMode() {
  root.style.setProperty("--primary-color", "#2bb39a");
  root.style.setProperty("--secondary-color", "#858fff");
  root.style.setProperty("background-color", "#ffffff");
  root.style.setProperty("--background_color", "#ffffff");
  root.style.setProperty("--accent2-color", "#000000");
  root.style.setProperty("--a-color", "rgb(66, 30, 89)")
  root.style.setProperty("--accent1-color", "#ff7583");
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