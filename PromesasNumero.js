function numero(num){
    return new Promise((resolve, reject) =>{
        if(num===5){
            resolve(`El numero es 5.`)
        }else{
            reject("El numero no es 5.")
        }
    })
}

numero(5)
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error)
})