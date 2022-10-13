import { generarId } from './generarId.js';
import Pedido from './Pedido.js';

export default class Sistema {
    #registroDeClientes
    #listaDePedidos

    constructor({ registroDeClientes, listaDePedidos }) {
        this.#registroDeClientes = registroDeClientes
        this.#listaDePedidos = listaDePedidos
    }

    async cargarPedido(datosPedido) {
        const { idCliente } = datosPedido
        await this.#registroDeClientes.verificarExistenciaPorId(idCliente)

        const idPedido = generarId()
        const pedido = new Pedido({ idPedido, ...datosPedido })
        await this.#listaDePedidos.cargar(pedido)
        return pedido.asDto()
    }

    async obtenerPedidos() {
        const pedidos = await this.#listaDePedidos.listar();
        return pedidos.map(p => p.asDto())
    }
}