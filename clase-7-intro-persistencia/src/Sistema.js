import Donacion from './Donacion.js'

const MONTO_MINIMO_NOTIFICACION = 10000

export default class Sistema {
    #notificador
    #historialDeDonaciones

    constructor(notificador, historialDeDonaciones) {
        this.#notificador = notificador
        this.#historialDeDonaciones = historialDeDonaciones
    }

    async cargarDonacion({ nombre, monto }) {
        const donacion = new Donacion({ nombre, monto })

        if (!donacion.esAnonima() && donacion.superaMonto(MONTO_MINIMO_NOTIFICACION)) {
            this.#notificador.notificarALaAdministracion(donacion.asDto())
        }

        await this.#historialDeDonaciones.registrar(donacion)

        return donacion.asDto()
    }

    // listarDonaciones() {
    //     return this.#historialDeDonaciones.listarTodas().map(d => d.asDto())
    // }
}

