import Dni from '../../src/models/Dni.js';

describe('Dni', function () {
    describe('si el dni se crea a partir de algo que no sea string', function () {
        it('lanza un error de tipo', function () {
            // preparacion
            const argumento = []

            // ejercicio
            let fallo = false
            try {
                new Dni(argumento)
            } catch (error) {
                if (error.tipo == 'ERROR_DE_TIPO') {
                    fallo = true
                }
            }

            // validacion           
            if (fallo) {
                // todo bien, la prueba salio ok
            } else {
                throw new Error('no lanzó el error correspondiente')
            }
        })
    })

    describe('si el dni se crea a partir de un string', function () {
        describe('si tiene menos de 7 caracteres', function () {
            it('lanza un error', function () {
                // preparacion
                const argumento = '123456'

                // ejercicio
                let fallo = false
                try {
                    new Dni(argumento)
                } catch (error) {
                    fallo = true
                }

                // validacion           
                if (fallo) {
                    // todo bien, la prueba salio ok
                } else {
                    throw new Error('no lanzó el error correspondiente')
                }
            })
        })

        describe('si tiene mas de 8 caracteres', function () {
            it('lanza un error', function () {
                // preparacion
                const argumento = '123456789'

                // ejercicio
                let fallo = false
                try {
                    new Dni(argumento)
                } catch (error) {
                    fallo = true
                }

                // validacion           
                if (fallo) {
                    // todo bien, la prueba salio ok
                } else {
                    throw new Error('no lanzó el error correspondiente')
                }
            })
        })

        describe('si tiene caracteres no numericos', function () {
            it('lanza un error', function () {
                // preparacion
                const argumento = '123456xx'

                // ejercicio
                let fallo = false
                try {
                    new Dni(argumento)
                } catch (error) {
                    fallo = true
                }

                // validacion           
                if (fallo) {
                    // todo bien, la prueba salio ok
                } else {
                    throw new Error('no lanzó el error correspondiente')
                }
            })
        })

        describe('si es un numero menor o igual a cero', function () {
            it('lanza un error por negativo', function () {
                // preparacion
                const argumento = '-1234567'

                // ejercicio
                let fallo = false
                try {
                    new Dni(argumento)
                } catch (error) {
                    fallo = true
                }

                // validacion           
                if (fallo) {
                    // todo bien, la prueba salio ok
                } else {
                    throw new Error('no lanzó el error correspondiente')
                }
            })

            it('lanza un error por cero', function () {
                // preparacion
                const argumento = '0000000'

                // ejercicio
                let fallo = false
                try {
                    new Dni(argumento)
                } catch (error) {
                    fallo = true
                }

                // validacion           
                if (fallo) {
                    // todo bien, la prueba salio ok
                } else {
                    throw new Error('no lanzó el error correspondiente')
                }
            })
        })
    })
})