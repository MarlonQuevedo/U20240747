const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

function maximoDeTres(n1,n2,n3){
    return Math.max(n1,n2,n3)
}

rl.question('Ingrese el primer numero: ',(respuesta1)=>{
    rl.question('Ingrese el segundo numero: ', (respuesta2)=>{
        rl.question('Ingrese el tercer numero: ',(respuesta3)=>{
            const n1 = parseFloat(respuesta1);
            const n2 = parseFloat(respuesta2);
            const n3 = parseFloat(respuesta3);

            //Llamando la funcion
            const maximo = maximoDeTres(n1,n2,n3);

            //Salida de informacion
            console.log(`El numero mayor entre ${n1}, ${n2} y ${n3} es ${maximo}`);
            rl.close();
        });
    });
});