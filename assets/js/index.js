import obtenerInstancia from "./modulos/Tipos.js";

const selectorAnimal = document.getElementById(`animal`);
const selectorAge = document.getElementById(`edad`);
const selectorComent = document.getElementById(`comentarios`);
const animalesContainer = document.getElementById(`Animales`);
const modal = document.getElementById(`exampleModal`);
const preview = document.getElementById(`preview`);
const boton = document.getElementById(`btnRegistrar`);

let img;
let audio;
let animalesInvestigados = [];

const obtenerJson = (async () => {
    try {
        const response = await fetch('animales.json');
        const json = await response.json();
        const animales = json.animales;
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
        resetFormulario();
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
        cardImg.setAttribute(`class`, `card-img-top `);
        cardImg.setAttribute(`src`, `${animal._img}`);
        cardBtn.setAttribute(`class`, `btn`);

        cardBtn.innerHTML = `<img src="./assets/imgs/audio.svg" alt="Icon Description">`;

        animalesContainer.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardBtn);

        cardImg.addEventListener(`click`, () => {
            mostrarDatosAnimal(animal);

        })
        cardBtn.addEventListener(`click`, () => {
            switch (animal.nombre) {
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

const mostrarDatosAnimal = (animal) => {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
    <img src="${animal._img}" alt="Imagen del animal" class="img-fluid">
        <p>Edad: ${animal.edad}</p>
        <strong>Comentarios</strong>
        <p>${animal.comentarios}</p>
        
    `;
    $('#exampleModal').modal('show');
}

const resetFormulario = () => {
    document.getElementById('animal').options[0].selected = true;
    document.getElementById('edad').options[0].selected = true;
    document.getElementById('comentarios').value = '';
    document.getElementById('preview').innerHTML = '';
};