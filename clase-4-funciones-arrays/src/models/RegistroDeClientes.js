export default class RegistroDeClientes {
    #clientes

    constructor() {
        this.#clientes = []
    }

    anotar(cliente) {
        this.#clientes.push(cliente)
    }

    buscarPorDni(dni) {
        const cliente = this.#clientes.find(c => {
            return c.dni.numero === dni.numero
        })

        if (!cliente) {
            throw new Error('cliente no encontrado')
        }

        return cliente
    }
}