import Dni from '../../src/models/Dni.js'

import assert from 'assert'

describe('Dni', () => {
    describe('si el dni se crea a partir de algo que no sea string', () => {
        it('lanza un error de tipo', () => {
            const argumento = []
            assert.throws(
                () => new Dni(argumento),
                error => error.tipo === 'ERROR_DE_TIPO'
            )
        })
    })

    describe('si el dni se crea a partir de un string', () => {
        describe('si tiene menos de 7 caracteres', () => {
            it('lanza un error', () => {
                const argumento = '123456'
                assert.throws(() => new Dni(argumento))
            })
        })

        describe('si tiene mas de 8 caracteres', () => {
            it('lanza un error', () => {
                const argumento = '123456789'
                assert.throws(() => new Dni(argumento))
            })
        })

        describe('si tiene caracteres no numericos', () => {
            it('lanza un error', () => {
                const argumento = '123456xx'
                assert.throws(() => new Dni(argumento))
            })
        })

        describe('si es un numero menor o igual a cero', () => {
            it('lanza un error por negativo', () => {
                const argumento = '-1234567'
                assert.throws(() => new Dni(argumento))
            })

            it('lanza un error por cero', () => {
                const argumento = '0000000'
                assert.throws(() => new Dni(argumento))
            })
        })
    })
})