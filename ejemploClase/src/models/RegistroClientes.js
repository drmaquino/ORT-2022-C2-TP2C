export default class RegistroClientes {
    #clientes;
    constructor() {
        this.#clientes = [];
    }

    registrar(cliente) {
        this.#clientes.push(cliente);
    }

    verificarExistenciaPorId(idCliente) {
        const buscado = this.#clientes.find(c => c.idCliente === idCliente);
        if (!buscado) {
            throw new Error('el cliente no existe');
        }
    }
}
