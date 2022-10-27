export default class ListaDePedidos {
    #pedidos;
    constructor() {
        this.#pedidos = [];
    }

    cargar(pedido) {
        this.#pedidos.push(pedido);
    }

    listar() {
        return this.#pedidos;
    }
}
