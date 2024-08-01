let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su texto: ', (texto)=>{
    function contarVocales(texto) {
        const vocales = 'aeiouAEIOU';
        let contador = 0;
    
        for (let i = 0; i < texto.length; i++) {
            if (vocales.includes(texto[i])) {
                contador++;
            }
        }
    
        return contador;
    }    
    const cantidadVocales = contarVocales(texto);
    console.log(`Su texto "${texto}" tiene ${cantidadVocales} vocales.`); 
    process.exit();
});