const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

function celciusF(celcius){
    return (celcius* 9/5)+32;
};

rl.question('Ingrese la temperatura en grados celcius: ', (respuesta)=>{
    const celcius = parseFloat(respuesta);
    const farenheit = celciusF(celcius)
    console.log(`${celcius}° es igual a: ${farenheit}°F`);
    rl.close();
});