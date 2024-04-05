const obtenerJson = (async () => {
    const response = await fetch('animales.json');
    const json = await response.json();
    const animales = json.animales;
    return animales;
})();