import Sistema from '../negocio/Sistema.js'
import notificador from '../negocio/Notificador/NotificadorFactory.js'
import historial from '../negocio/HistorialDeDonaciones/HistorialDeDonacionesFactory.js'
import fs from 'fs'

const sistema = new Sistema(notificador, historial)

export async function controladorPostDonaciones(req, res, next) {
    try {
        const dtoDonacionCreada = await sistema.cargarDonacion(req.body)
        res.json(dtoDonacionCreada)
    } catch (error) {
        next(error)
    }
}

export async function controladorGetDonaciones(req, res, next) {
    try {
        const dtosDonaciones = await sistema.listarDonaciones()
        res.json(dtosDonaciones)
    } catch (error) {
        next(error)
    }
}

export async function controladorPostImagenes(req, res, next) {
    try {
        const nuevoNombre = `${req.file.destination}/${Date.now()}-${req.file.originalname}`
        await fs.promises.rename(req.file.path, nuevoNombre)
        res.send(nuevoNombre)
    } catch (error) {
        next(error)
    }
}