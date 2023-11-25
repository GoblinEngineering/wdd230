// const currentTemptag = document.querySelector('#temp')
// const windtag = document.querySelector('#humidity')
// const windchillTag = document.querySelector('#windchill')





// const weatherIcon = document.getElementById("weather-icon");
// const captionDesc = document.querySelector("figcaption");

// const url = "https://api.openweathermap.org/data/2.5/weather?appid=e5674c0b03a2f4565bf24abc425ce910&units=imperial&lat=49.75&lon=6.64";
const forcasturl = "https://api.openweathermap.org/data/2.5/forecast?appid=e5674c0b03a2f4565bf24abc425ce910&units=imperial&lat=49.75&lon=6.64";

// async function fetchApi() {
//     try {
//       const responce = await fetch(url);
//       if (responce.ok) {
//         const data = await responce.json();
//         displayResults(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// //


//   function displayResults(data) {

//     const temp = data["main"]["temp"]
//     const wind = data["main"]["humidity"]
//     const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     let desc = data["weather"][0]["description"];
//     weatherIcon.setAttribute("src", icon);
//     weatherIcon.setAttribute("alt", desc);
//     captionDesc.textContent = `${desc}`;

//     let windchill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16


//     windchillTag.textContent = windchill.toFixed(2) 
//     currentTemptag.textContent = temp;
//     windtag.textContent = wind
//     console.log("test")
//   }


  async function fetchApi2() {
    try {
      const responce = await fetch(forcasturl);
      if (responce.ok) {
        const data2 = await responce.json();
        displayResults2(data2);

      }
    } catch (error) {
      console.log(error);
    }
  }

const displayResults2 = (data) => {
    today = data["list"][0]
    tomarrow = data["list"][8]
    tomarrowX2 = data["list"][16]
    make_card(today)
    make_card(tomarrow)
    make_card(tomarrowX2)

}

function make_card(info){

    const temp = info["main"]["temp"]
    const humidity = info["main"]["humidity"]
    const icon = `https://openweathermap.org/img/w/${info.weather[0].icon}.png`;
    let desc = info["weather"][0]["description"];
    let windchill = (35.74 + 0.6215 * temp - 35.75 * humidity ** 0.16 + 0.4275 * temp * humidity ** 0.16).toFixed(2) 

    section = document.createElement("section")
    section.setAttribute("class", "card")

    h3 = document.createElement("h3")
    h3.textContent = info.dt_txt.substring(0,10)
    section.appendChild(h3)

    p1 = document.createElement("p")
    p1.innerHTML = `Temperature: ${temp}&deg;F`

    p2 = document.createElement("p")
    p2.innerHTML = `humidity: ${humidity}%`

    p3 = document.createElement("p")
    p3.innerHTML = `Windchill: ${windchill}&deg;F`

    section.appendChild(p1)
    section.appendChild(p2)
    section.appendChild(p3)

    fig = document.createElement("figure")
    fig.setAttribute("class", "W-icon")
    img = document.createElement("img")
    img.setAttribute("src", icon)
    img.setAttribute("alt", desc)
    fig.appendChild(img)
    cap = document.createElement("figcaption")
    cap.textContent = desc
    fig.appendChild(cap)
    section.appendChild(fig)

    const append = document.querySelector('.forcast')
    append.appendChild(section)

}

fetchApi2()






