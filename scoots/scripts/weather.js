
const forcasturl = "https://api.openweathermap.org/data/2.5/forecast?appid=e5674c0b03a2f4565bf24abc425ce910&units=imperial&lat=20.62196&lon=-87.07643";



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
    // make_card(tomarrowX2)

}

function make_card(info){

    const temp = info["main"]["temp_min"]
    const tempmax = info["main"]["temp_max"]
    const humidity = info["main"]["humidity"]
    const icon = `https://openweathermap.org/img/w/${info.weather[0].icon}.png`;
    let desc = info["weather"][0]["description"];
    let windchill = (35.74 + 0.6215 * temp - 35.75 * humidity ** 0.16 + 0.4275 * temp * humidity ** 0.16).toFixed(2) 


    section = document.createElement("div")
    section.setAttribute("class", "card")

    h3 = document.createElement("h3")
    h3.textContent = info.dt_txt.substring(0,10)
    // edit
    const date = new Date(info.dt * 1000);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    h3.textContent = `${day} ${info.dt_txt.substring(5,10)}`
    section.appendChild(h3)
    section.appendChild(document.createElement("hr"))

    p1 = document.createElement("p")
    p1.innerHTML = `Temperature: ${temp}&deg;F / ${tempmax}&deg;F`

    p2 = document.createElement("p")
    p2.innerHTML = `humidity: ${humidity}%`

    p3 = document.createElement("p")
    p3.innerHTML = `Windchill: ${windchill}&deg;F`

    section.appendChild(p1)
    section.appendChild(document.createElement("hr"))
    section.appendChild(p2)
    section.appendChild(document.createElement("hr"))
    section.appendChild(p3)
    section.appendChild(document.createElement("hr"))

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

    const everything = document.querySelector('.forcast')
    everything.appendChild(section)

}

fetchApi2()
