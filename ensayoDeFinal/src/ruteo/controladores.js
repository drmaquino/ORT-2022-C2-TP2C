import agendaDeTurnos from '../negocio/agendaDeTurnos/AgendaDeTurnosFactory.js'
import Sistema from '../negocio/Sistema.js'

const sistema = new Sistema(agendaDeTurnos)

export async function controladorPostTurnos(req, res, next) {
    try {
        const dtoTurnoCreado = await sistema.cargarTurno(req.body)
        res.status(201).json(dtoTurnoCreado)
    } catch (error) {
        next(error)
    }
}

export async function controladorGetReporteDiversidad(req, res, next) {
    try {
        const mes_desde = req.query.mes_desde
        const reporteDiversidad = await sistema.reportarDiversidad(mes_desde)
        res.json(reporteDiversidad)
    } catch (error) {
        next(error)
    }
}
