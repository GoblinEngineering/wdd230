const baseURL = "https://goblinengineering.github.io/wdd230/";
const linksURL = "https://goblinengineering.github.io/wdd230/data/links.json";
const links_ID =  document.getElementById("links")

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok){
    const data = await response.json();
    console.log(data);
    displayLinks(data);
    }
}
  
function displayLinks(json_data){
    json_data["lessons"].forEach(Lesson_info => {
        h3 = document.createElement("h3")
        h3.textContent = `Week ${Lesson_info["lesson"]}`
        links_ID.appendChild(h3)
        Lesson_info["links"].forEach(Link_info => {

            li = document.createElement("li")
            a = document.createElement("a")
            a.setAttribute("href", Link_info["url"])
            a.textContent = Link_info["title"]
            li.appendChild(a)
            links_ID.appendChild(li)
            
        })
        hr = document.createElement("hr")
        links_ID.appendChild(hr)

    })
}


  getLinks();
