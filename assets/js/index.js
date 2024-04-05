import Leon from './Leon.js';

const obtenerJson = (async () => {
    try {
        const response = await fetch('animales.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const animales = data.animales;
        console.log(animales);
        return animales;
    } catch (error) {
        console.log(error);
    }
})();


obtenerJson.then((animales) => {
    document.getElementById('btnRegistrar').addEventListener('click', () => {
        const animal = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentarios = document.getElementById('comentarios').value;
        
        if(document.getElementById('animal').options[0].selected === true){
            alert("Por favor, seleccione un animal");
            return;
        }
        if(document.getElementById('edad').options[0].selected === true){
            alert("Por favor, seleccione una edad");
            return;
        }
        if(document.getElementById('comentarios').value === ''){
            alert("Por favor, escriba un comentario");
            return;
        }
    })
})