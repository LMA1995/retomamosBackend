import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'
//instanciamos expres para que nuestro backend quede activo apoderandose de un puerto



const app = express()
const PORT= 3000

//middlewares: son funciones que se ejecutan entre la solicitud y la logica de mi app
app.use(cors());//cors es un middleware que nos sirve para permitir conexiones remotas
app.use(express.json());//permite interpretar los datos que lleguen en la solicitud o request en formato json
app.use(morgan('dev'))

//area de logica
console.log('primer mensaje del backend mas segunda prueba😎')
//diseño de los endpoints
//http://localhost:3000/api/saludo
app.get('/api/saludo', (req, res)=>{
    const vehiculos= ['🏎️','🚗','🚕']
res.json({
mensaje: 'Bienvenidos a nuestro backend',
vehiculos
})
})

app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto ${PORT}`)
})
