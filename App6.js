let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese su cadena aqui: ', (cadena)=>{
    parseInt(rl.question('¿En qué caracter iniciará su subcadena? ', (inicio)=>{
        parseInt(rl.question('¿Cuantos caracteres desea seleccionar? ', (tamaño)=>{
            const subcadena = cadena.substring(inicio, inicio+tamaño);
            console.log(`La subcadena es: ${subcadena}`);
            process.exit();
        }));
    }));
});