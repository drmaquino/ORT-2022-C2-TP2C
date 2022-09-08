import Donacion from './Donacion.js'

const MONTO_MINIMO_NOTIFICACION = 10000

export default class Sistema {
    #notificador
    constructor(notificador) {
        this.#notificador = notificador
    }

    cargarDonacion({ nombre, monto }) {
        const donacion = new Donacion({ nombre, monto })

        if (!donacion.esAnonima() && donacion.superaMonto(MONTO_MINIMO_NOTIFICACION)) {
            this.#notificador.notificarALaAdministracion(donacion.asDto())
        }

        return donacion.asDto()
    }
}

