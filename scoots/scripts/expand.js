

const mainnav = document.querySelector('nav')
const hambutton = document.getElementById('menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('hide');
    hambutton.classList.toggle("hide")
    console.log("help")
});

