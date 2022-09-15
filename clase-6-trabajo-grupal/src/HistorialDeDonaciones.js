export default class HistorialDeDonaciones {
    #donaciones

    constructor() {
        this.#donaciones = []
    }

    registrar(donacion) {
        this.#donaciones.push(donacion)
    }

    listarTodas() {
        return this.#donaciones
    }
}