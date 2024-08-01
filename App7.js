let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese aquí su texto: ', (texto) => {
    function contarPalabras(texto) {
        const palabras = texto.split(" ");
        return palabras.length;
    }

    const cantidadPalabras = contarPalabras(texto);
    console.log(`La cantidad de palabras en su texto es: ${cantidadPalabras}`);
    process.exit();
});
