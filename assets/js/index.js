import obtenerInstancia from "./modulos/Tipos.js";


obtenerInstancia
//Selectores
const selectorAnimal = document.getElementById(`animal`);
const selectorAge = document.getElementById(`edad`);
const selectorComent = document.getElementById(`comentarios`);
const animalesContainer = document.getElementById(`Animales`);
const preview = document.getElementById(`preview`);
const boton = document.getElementById(`btnRegistrar`);

//Variables
let img;
let audio;
let animalesInvestigados = [];

//Se obtiene Json
const obtenerJson = (async () => {
    try {
        const response = await fetch('animales.json');
        const json = await response.json();
        const animales = json.animales;
        console.log(animales);
        return animales;
    } catch (error) {
        console.log("Error: " + error);
    }
})();

//Preview Animales
selectorAnimal.addEventListener(`change`, async (event) => {
    const name = event.target.value;

    const jsonResolve = await fetch(`animales.json`);
    const json = await jsonResolve.json();
    const animales = json.animales;

    const animal = animales.find((item) => item.name === name);

    img = `./assets/imgs/${animal.imagen}`;
    audio = `./assets/sounds/${animal.sonido}`;
    preview.style.backgroundImage = `url(${img})`;
})

boton.addEventListener(`click`, () => {
    const name = selectorAnimal.value;
    const age = selectorAge.value;
    const comment = selectorComent.value;

    if (name && age && comment) {
        let objetoAnimal = obtenerInstancia(name, age, img, comment, audio);
        animalesInvestigados.push(objetoAnimal);
        mostrarAnimales();
    } else {
        alert("Por favor rellene todos los campos");
    }
});


const mostrarAnimales = () => {
    animalesContainer.innerHTML = '';

    animalesInvestigados.forEach((animal) => {
        let card = document.createElement(`div`);
        let cardImg = document.createElement(`img`);
        let cardBtn = document.createElement(`button`);
        cardImg.setAttribute(`class`, `card-img-top p-2`);
        cardImg.setAttribute(`src`, `${animal._img}`);
        cardBtn.setAttribute(`class`, `btn btn-secondary w-100`);
        

        cardBtn.innerHTML = `<img src="./assets/imgs/audio.svg" alt="Icon Description">`;

        animalesContainer.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardBtn);


        //Y si lo hago con el listener nomas y era xD
        cardBtn.addEventListener(`click`, () => {
            switch(animal.nombre){
                case "Leon":
                    animal.rugir()
                    break;
                case "Lobo":
                    animal.aullar()
                    break;
                case "Oso":
                    animal.grunir()
                    break;
                case "Serpiente":
                    animal.sisear()
                    break;
                case "Aguila":
                    animal.chillar()
                    break;
                default:
                    throw new Error("Animal no encontrado");
            }
        })
    })
}