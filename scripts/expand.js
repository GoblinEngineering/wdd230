

function change_mode (){
    // let map = document.createElement('iframe');
    // map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206110.72849882548!2d-112.3898106461061!3d36.17920330634734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae759b4d15%3A0x1f38a9bec9912029!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sen!2sus!4v1695861809620!5m2!1sen!2sus"
    // map.width = "600"
    // map.height = "450"
    // map.style = "border:0;"
    // map.allowFullscreen = ""
    // map.loading="lazy"
    // map.referrerPolicy="no-referrer-when-downgrade"


    if (document.getElementById("mobile_menu_button").src == "https://goblinengineering.github.io/wdd230/images/menu.jpg"){
        document.getElementById("mobile_menu_button").src = "https://goblinengineering.github.io/wdd230/images/X.jpg"
        // document.getElementById("place_holder").appendChild(map)
        // document.getElementById("nav").style.display = "none" 
        document.getElementById("nav").classList.toggle("hide")
        console.log("a")
        
    }else{
        document.getElementById("mobile_menu_button").src = "https://goblinengineering.github.io/wdd230/images/menu.jpg"
        // document.getElementById("nav").style.display = "none"
        document.getElementById("nav").classList.toggle("hide")
        console.log("b")
        // document.getElementById("place_holder").innerHTML = ""
        
    }


    
    

        
}

// let buttonElementdiv = document.getElementById("mobile_menu_button")
// buttonElementdiv.addEventListener("click", change_mode)
// const mainnav = document.getElementById("mobile_menu_button")
// const hambutton = document.querySelector('#menu');

// buttonElementdiv.addEventListener('click', () => {
// 	console.log("click");
//     mainnav.classList.toggle('hide');
	// hambutton.classList.toggle('show');
// });



// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('#nav')
const hambutton = document.getElementById('mobile_menu_button');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('hide');
    hambutton.classList.toggle("hide")
	// hambutton.classList.toggle('hide');
    console.log("help")
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/