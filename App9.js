let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su texto: ', (texto)=>{
    function esPalindromo(str) {
        const cadenaLimpia = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
        const longitud = cadenaLimpia.length;
    
        for (let i = 0; i < longitud / 2; i++) {
            if (cadenaLimpia[i] !== cadenaLimpia[longitud - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
    console.log('¿Su cadena de texto es palindromo?: ')
    console.log(esPalindromo(texto));
    process.exit();
    
});