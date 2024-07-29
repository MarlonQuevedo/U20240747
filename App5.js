let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

rl.question('Ingrese una palabra: ', (palabra1)=>{
    rl.question('Con que palabra desea reemplazar? ',(palabra2)=>{
        console.log(`La palabra 1 fue ${palabra1} y su reemplazo fue ${palabra2}`);
        process.exit();
    });
});