import assert from 'assert'
import HistorialDeDonaciones from '../src/HistorialDeDonaciones.js'
import Sistema from '../src/Sistema.js'

class Notificador {
    notificarALaAdministracion({ nombre, monto }) {
        console.log(`mail enviado al admin (nombre: ${nombre}, monto: ${monto})`)
    }
}
const notificadorReal = new Notificador()

const historialDeDonaciones = new HistorialDeDonaciones()

const sistema = new Sistema(notificadorReal, historialDeDonaciones)

describe('sistema de donaciones', () => {
    describe('carga de donaciones', () => {
        describe('sobre su nombre', () => {
            describe('si mando una donacion sin nombre', () => {
                it('se guarda con nombre "anonimo"', () => {
                    const { nombre } = sistema.cargarDonacion({ monto: 123 })
                    assert.strictEqual(nombre, 'anonimo')
                    const todas = historialDeDonaciones.listarTodas()
                    // assert.ok(todas......)
                })
            })
            describe('si mando una donacion con nombre', () => {
                describe('si el nombre contiene caracteres no alfabeticos', () => {
                    it('lanza un error de nombre invalido', () => {
                        const nombreElegido = 'xyz0'
                        assert.throws(
                            () => { sistema.cargarDonacion({ nombre: nombreElegido, monto: 123 }) },
                            error => error.message === 'nombre invalido'
                        )
                    })
                })
                describe('si el nombre solo contiene caracteres alfabeticos', () => {
                    it('se guarda con ese mismo nombre', () => {
                        const nombreElegido = 'xyz'
                        const { nombre } = sistema.cargarDonacion({ nombre: nombreElegido, monto: 123 })
                        assert.strictEqual(nombre, nombreElegido)
                    })
                })
            })
        })
        // describe('sobre su monto', () => {
        //     describe('si mando una donacion con un monto no numerico ', () => {
        //         it('lanza un error', () => {
        //         })
        //     })
        //     describe('si mando una donacion con un monto numerico no positivo ', () => {
        //         it('lanza un error', () => {
        //         })
        //     })
        //     describe('si mando una donacion con un monto numerico positivo', () => {
        //         it('se guarda con nombre ese monto', () => {
        //         })
        //     })
        // })
        describe('si una donacion valida no es anonima y supera los 10k', () => {
            it('notifica a la administracion', () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                sistemaHackeado.cargarDonacion({ nombre: 'marian', monto: 10_001 })
                assert.ok(fueLlamado)
            })
        })
        describe('si una donacion valida es anonima', () => {
            it('no envia ninguna notificacion', () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                sistemaHackeado.cargarDonacion({ monto: 10_001 })
                assert.ok(!fueLlamado)
            })
        })
        describe('si una donacion valida y no supera los 10k', () => {
            it('no envia ninguna notificacion', () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                sistemaHackeado.cargarDonacion({ nombre: 'marian', monto: 10_000 })
                assert.ok(!fueLlamado)
            })
        })
    })
})