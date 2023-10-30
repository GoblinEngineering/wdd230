const visitElem = document.getElementById("welcome");
const today = Date.now();
const msToDays = 84600000;
let lastVisit = Number(localStorage.getItem("lastVisit"));
let daysSinceVisit = Math.floor((today - lastVisit) / msToDays);

if (lastVisit === today) {
  visitElem.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceVisit < 1) {
  visitElem.textContent = "Back so soon! Awesome!";
} else {
  visitElem.textContent = `You last visited ${daysSinceVisit} days ago.`;
}

localStorage.setItem("lastVisit", today);
