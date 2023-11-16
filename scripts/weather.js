const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?appid=e5674c0b03a2f4565bf24abc425ce910&units=imperial&lat=49.75&lon=6.64";

async function fetchApi() {
    try {
      const responce = await fetch(url);
      if (responce.ok) {
        const data = await responce.json();
        displayResults(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
//


  function displayResults(data) {
    currentTemp.innerHTML = `${data["main"]["temp"]}&deg;F`;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data["weather"][0]["description"];
    weatherIcon.setAttribute("src", icon);
    weatherIcon.setAttribute("alt", description);
    captionDesc.textContent = `${desc}`;
  }
  

function titleCase(str) {
    
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
    
}

fetchApi();
