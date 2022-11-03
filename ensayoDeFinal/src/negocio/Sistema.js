import EnteroEnRango from './models/EnteroEnRango.js'
import TipoDeServicio from './models/TipoDeServicio.js'
import Turno from './models/Turno.js'


const CANT_TURNOS_MENSUALES = 720
const CANT_TURNOS_PARA_AUXILIO = 108
const CANT_TURNOS_PARA_EL_RESTO = 3//612

export default class Sistema {
    #agendaDeTurnos

    constructor(agendaDeTurnos) {
        this.#agendaDeTurnos = agendaDeTurnos
    }

    async cargarTurno({
        dia,
        mes,
        hora,
        nombreResponsable,
        telefono,
        tipoDeServicio, }) {
        const turno = new Turno({
            dia,
            mes,
            hora,
            nombreResponsable,
            telefono,
            tipoDeServicio,
        })

        const { programado, cotizacion } = this.#agendaDeTurnos.contarPorTipo()
        if (turno.tipoDeServicio !== TipoDeServicio.AUXILIO &&
            programado + cotizacion >= CANT_TURNOS_PARA_EL_RESTO) {
            const error = new Error('excede la cantidad de turnos disponibles')
            error.tipo = 'EXCEDE_RESERVA_PARA_AUXILIO'
            throw error
        }

        await this.#agendaDeTurnos.registrar(turno)

        return turno.asDto()
    }

    reportarDiversidad(numMesDesde) {
        const mesDesde = new EnteroEnRango(numMesDesde, 1, 12).valor
        const cantidadesSegunTipo = this.#agendaDeTurnos.contarPorTipo({ desde: mesDesde })
        return cantidadesSegunTipo
    }
}

