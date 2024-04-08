import Animal from "./Animal.js";

let reproducirAudio = document.getElementById("player");
class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    chillar() {
        reproducirAudio.src = `./${this._sonido}`;
        reproducirAudio.play();
    }
}
class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    rugir() {
        reproducirAudio.src = `./${this._sonido}`;
        reproducirAudio.play();
    }
}
class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    aullar() {
        reproducirAudio.src = `./${this._sonido}`;
        reproducirAudio.play();
    }
}
class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    grunir() {
        reproducirAudio.src = `./${this._sonido}`;
        reproducirAudio.play();
    }
}
class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }
    sisear() {
        reproducirAudio.src = `./${this._sonido}`;
        reproducirAudio.play();
    }
}

function obtenerInstancia(nombre, edad, imagen, comentario, sonido) {
    switch (nombre) {
        case "Leon":
            return new Leon(nombre, edad, imagen, comentario, sonido);
        case "Lobo":
            return new Lobo(nombre, edad, imagen, comentario, sonido);
        case "Oso":
            return new Oso(nombre, edad, imagen, comentario, sonido);
        case "Serpiente":
            return new Serpiente(nombre, edad, imagen, comentario, sonido);
        case "Aguila":
            return new Aguila(nombre, edad, imagen, comentario, sonido);
        default:
            throw new Error("Animal no encontrado");
    }
}

export default obtenerInstancia;