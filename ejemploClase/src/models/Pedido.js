import EnteroPositivo from './EnteroPositivo.js'
import Palabra from './Palabra.js'

export default class Pedido {
    #idPedido
    #idCliente
    #idProducto
    #cantidad

    constructor({
        idPedido,
        idCliente,
        idProducto,
        cantidad,
    }) {
        this.idPedido = idPedido
        this.idCliente = idCliente
        this.idProducto = idProducto
        this.cantidad = cantidad
    }

    set idPedido(valor) {
        if (!valor) {
            throw new Error('no puede ser vacio')
        }
        this.#idPedido = valor
    }

    set idCliente(valor) {
        this.#idCliente = new Palabra(valor)
    }

    set idProducto(valor) {
        if (!valor) {
            throw new Error('no puede ser vacio')
        }
        this.#idProducto = valor
    }

    set cantidad(valor) {
        this.#cantidad = new EnteroPositivo(valor)
    }

    asDto() {
        return Object.freeze({
            idPedido: this.#idPedido,
            idCliente: this.#idCliente.valor,
            idProducto: this.#idProducto,
            cantidad: this.#cantidad.valor,
        })
    }
}