import express from 'express'
import { controladorPostDonaciones, controladorGetDonaciones } from './controladores.js'

const app = express()

app.use(express.json())

app.post('/donaciones', controladorPostDonaciones)
app.get('/donaciones', controladorGetDonaciones)

const puerto = 8080
const servidor = app.listen(puerto)