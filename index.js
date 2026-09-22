import express from 'express'
//instanciamos expres para que nuestro backend quede activo apoderandose de un puerto

const app = express()
const PORT= 3000
app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto ${PORT}`)
})
console.log('primer mensaje del backend')