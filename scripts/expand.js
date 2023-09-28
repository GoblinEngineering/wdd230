

function change_mode (){
    if (document.getElementById("mobile_menu_button").src == "images/menu.png"){
        document.getElementById("mobile_menu_button").src = "images/X.png"
    }else{
        document.getElementById("mobile_menu_button").src = "images/menu.png"
    }
    console.log((document.getElementById("mobile_menu_button").src))
    https://goblinengineering.github.io/wdd230/index.html
        
}

let buttonElementdiv = document.getElementById("mobile_menu_button")
buttonElementdiv.addEventListener("click", change_mode)