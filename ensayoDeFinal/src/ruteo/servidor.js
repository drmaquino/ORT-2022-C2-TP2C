import express from 'express'
import { manejoDeErrores } from './errores.js'
import routerTurnos from './routers.js'

const app = express()

app.use(express.json())

app.use('/api/turnos', routerTurnos)

app.use(manejoDeErrores)

const puerto = 8080
const servidor = app.listen(puerto, () => {
    console.log(`conectado y escuchando en puerto ${puerto}`)
})
