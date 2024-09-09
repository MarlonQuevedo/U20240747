function codigoDescuento(descuento){
    return new Promise((resolve, reject)=>{
        if(descuento === "DESCUENTO2024"){
            resolve('Codigo de descuento valido')
        }else{
            reject('Codigo de descuento invalido')
        }
    })
}

codigoDescuento("DESCUENTO2024")
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})