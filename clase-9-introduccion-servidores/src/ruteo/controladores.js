import Sistema from '../negocio/Sistema.js'
import notificador from '../negocio/Notificador/NotificadorFactory.js'
import historial from '../negocio/HistorialDeDonaciones/HistorialDeDonacionesFactory.js'

const sistema = new Sistema(notificador, historial)

export async function controladorPostDonaciones(req, res) {
    const dtoDonacionCreada = await sistema.cargarDonacion(req.body)
    res.json(dtoDonacionCreada)
}

export async function controladorGetDonaciones(req, res) {
    const dtosDonaciones = await sistema.listarDonaciones()
    res.json(dtosDonaciones)
}