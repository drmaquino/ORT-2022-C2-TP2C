import assert from 'assert'

import Sistema from '../src/Sistema.js'
import historialDeDonaciones from '../src/HistorialDeDonaciones/HistorialDeDonacionesFactory.js'
import notificador from '../src/Notificador/NotificadorFactory.js'

const sistema = new Sistema(notificador, historialDeDonaciones)

describe('sistema de donaciones', () => {
    describe('carga de donaciones', () => {
        describe('sobre su nombre', () => {
            describe('si mando una donacion sin nombre', () => {
                it('se guarda con nombre "anonimo"', async () => {
                    const { nombre } = await sistema.cargarDonacion({ monto: 123 })
                    assert.strictEqual(nombre, 'anonimo')
                    // const todas = historialDeDonaciones.listarTodas()
                    // assert.ok(todas......)
                })
            })
            describe('si mando una donacion con nombre', () => {
                describe('si el nombre contiene caracteres no alfabeticos', () => {
                    it('lanza un error de nombre invalido', () => {
                        const nombreElegido = 'xyz0'
                        assert.rejects(
                            async () => { await sistema.cargarDonacion({ nombre: nombreElegido, monto: 123 }) },
                            error => error.message === 'nombre invalido'
                        )
                    })
                })
                describe('si el nombre solo contiene caracteres alfabeticos', () => {
                    it('se guarda con ese mismo nombre', async () => {
                        const nombreElegido = 'xyz'
                        const { nombre } = await sistema.cargarDonacion({ nombre: nombreElegido, monto: 123 })
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
            it('notifica a la administracion', async () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                await sistemaHackeado.cargarDonacion({ nombre: 'marian', monto: 10_001 })
                assert.ok(fueLlamado)
            })
        })
        describe('si una donacion valida es anonima', () => {
            it('no envia ninguna notificacion', async () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                await sistemaHackeado.cargarDonacion({ monto: 10_001 })
                assert.ok(!fueLlamado)
            })
        })
        describe('si una donacion valida y no supera los 10k', () => {
            it('no envia ninguna notificacion', async () => {
                let fueLlamado = false

                const notificadorTrucho = {
                    notificarALaAdministracion: () => {
                        fueLlamado = true
                    }
                }

                const sistemaHackeado = new Sistema(notificadorTrucho, historialDeDonaciones)
                await sistemaHackeado.cargarDonacion({ nombre: 'marian', monto: 10_000 })
                assert.ok(!fueLlamado)
            })
        })
    })
})