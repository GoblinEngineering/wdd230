const jsonURL = "https://goblinengineering.github.io/wdd230/scoots/rental_data.json";


async function getPrices() {
    try {
        const response = await fetch(jsonURL);
        if (response.ok) {
            const data = await response.json();
            createTables(data);
        }  
    } catch (error) {
        console.log(error);
    }
}


function createTables(data) {

    Object.keys(data["prices"][0]).forEach(type =>{



            createTable(type, data["prices"][0][type], "reservation")
            createTable(type, data["prices"][0][type], "walk-in")

    });
}


function createTable(name, data, res) {
    let sectionID = `${name.toLowerCase()}-price`;
    let table = document.createElement('table');

    let caption = document.createElement('h1');
    caption.textContent = res;
    document.getElementById(sectionID).appendChild(caption);


    let thead = table.createTHead();
    let headerRow = thead.insertRow();

    let headerCell1 = document.createElement('th');
    headerCell1.textContent = 'Model';
    headerRow.appendChild(headerCell1);

    let headerCell2 = document.createElement('th');
    headerCell2.textContent = 'Max People';
    headerRow.appendChild(headerCell2)

    let headerCell3 = document.createElement('th');
    headerCell3.textContent = 'Half Day (3hr)';
    headerRow.appendChild(headerCell3)

    let headerCell4 = document.createElement('th');
    headerCell4.textContent = 'Full Day';
    headerRow.appendChild(headerCell4)


    let tbody = table.createTBody();


    data.forEach(model =>{
        let bodyRow = tbody.insertRow();
        bodyRow.insertCell(0).textContent = model.model;
        bodyRow.insertCell(1).textContent = model['maxPersons'];
        bodyRow.insertCell(2).textContent = model[res].half;
        bodyRow.insertCell(3).textContent = model[res].full;



    document.getElementById(sectionID).appendChild(table);
})
}

getPrices();