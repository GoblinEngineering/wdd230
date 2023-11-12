const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

// pull Json and place



const baseURL = "https://goblinengineering.github.io/wdd230/";
const linksURL = "https://goblinengineering.github.io/wdd230/chamber/data/members.json";


async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    displayLinks(data);
    }
}
  
function displayLinks(json_data){
    json_data["members"].forEach(member => {
        section = document.createElement("section")
        h3 = document.createElement("h3")
        h3.textContent = member["name"]
        section.appendChild(h3)

        img = document.createElement("img")
        img.setAttribute("src", member["img"])
        img.setAttribute("alt", `${member["name"]} img`)
        section.appendChild(img)

        p = document.createElement("p")
        br = document.createElement("br")
        p.innerHTML = `Address : ${member["address"]} <br>Phone : ${member["phone_number"]} <br> Level : ${member["level"]}`
        section.appendChild(p)


        a = document.createElement("a")
        a.setAttribute("href", member["url"])
        a.textContent = "Site Link"
        section.appendChild(a)

        display.appendChild(section)

    })
}


  getLinks();