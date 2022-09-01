import assert from 'assert'

import RegistroDeClientes from '../../src/models/RegistroDeClientes.js'
import Dni from '../../src/models/Dni.js'
import EnteroPositivo from '../../src/models/EnteroPositivo.js'
import Cliente from '../../src/models/Cliente.js'
import Barrio from '../../src/models/Barrio.js'
import ComoNosConocio from '../../src/models/ComoNosConocio.js'

const dni = new Dni("36123123")
const edad = new EnteroPositivo(36)
const cliente = new Cliente(dni, edad, Barrio.VILLA_DEL_PARQUE, ComoNosConocio.REDES)

describe('Registro de clientes', () => {
    describe('si guardo un cliente', () => {
        it('luego puedo recuperarlo por su dni', () => {
            const registro = new RegistroDeClientes()
            registro.anotar(cliente)
            const clienteEncontrado = registro.buscarPorDni(dni)
            assert.strictEqual(cliente.dni, clienteEncontrado.dni)

        })
    })

    describe('si busco un cliente que no existe', () => {
        it('lanza un error de "cliente no encontrado"', () => {
            const registro = new RegistroDeClientes()
            registro.anotar(cliente)
            assert.throws(() => registro.buscarPorDni(new Dni("36000000")))
        })
    })
})