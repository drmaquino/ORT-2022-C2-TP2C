export default class AgendaDeTurnosMemoria {
    #turnos

    constructor() {
        this.#turnos = []
    }

    registrar(turno) {
        this.#turnos.push(turno)
    }

    listarTodos() {
        return this.#turnos
    }

    contarPorTipo({ desde = -1 } = {}) {
        const cantidadesSegunTipo = {
            programado: 0,
            auxilio: 0,
            cotizacion: 0
        }

        for (const turno of this.#turnos.filter(t => t.mes.valor >= desde)) {
            cantidadesSegunTipo[turno.tipoDeServicio.valor]++
        }

        return cantidadesSegunTipo
    }
}