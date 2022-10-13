import ListaDePedidos from './models/ListaDePedidos.js';
import RegistroClientes from './models/RegistroClientes.js';
import Sistema from './models/Sistema.js';

const listaDePedidos = new ListaDePedidos()
const registroDeClientes = new RegistroClientes()
const sistema = new Sistema({ registroDeClientes, listaDePedidos })

await registroDeClientes.registrar({
    idCliente: 'abc'
})

const pedidoCargado = await sistema.cargarPedido({
    idCliente: 'abc',
    idProducto: '123',
    cantidad: 1
})

console.log(pedidoCargado)

const pedidos = await sistema.obtenerPedidos()
console.log(pedidos)