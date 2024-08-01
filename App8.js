let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su cadena de texto: ',(texto)=>{
    function invertirCadena(texto) {
        let cadenaInvertida = "";
        for (let i = texto.length -1; i >= 0; i--) {
            cadenaInvertida += texto[i];
        }
        return cadenaInvertida;
    }
    const cadenaInvertida = invertirCadena(texto);
    console.log(`Su cadena de texto invertida es: ${cadenaInvertida}`);
    process.exit();
});