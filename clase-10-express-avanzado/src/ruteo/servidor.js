import express from 'express'
import { controladorPostImagenes } from './controladores.js'
import { manejoDeErrores } from './errores.js'
import { clasificarUsuarios, extraerImagen } from './middlewares.js'
import routerDonaciones from './routers.js'

const app = express()

app.use('/imagenes', express.static('images'))
app.use(express.json())
app.use(clasificarUsuarios)

app.use('/api/donaciones', routerDonaciones)

app.post('/imagenes', extraerImagen, controladorPostImagenes)

app.use(manejoDeErrores)

const puerto = 8080
const servidor = app.listen(puerto, () => {
    console.log(`conectado y escuchando en puerto ${puerto}`)
})
