function edadValida(edad){
    return new Promise((resolve, reject)=>{
        if(edad >= 18){
            resolve("Edad valida para acceder al contenido.")
        }else{
            reject("Edad insuficiente para acceder al contenido.")
        }
    })
}

edadValida(19)
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})