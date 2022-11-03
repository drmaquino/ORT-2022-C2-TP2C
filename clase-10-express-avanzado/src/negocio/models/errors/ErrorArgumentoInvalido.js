export default class ErrorArgumentoInvalido extends Error {
    constructor(descripcion) {
        super(descripcion)
        this.tipo = 'ERROR_ARGUMENTO_INVALIDO'
    }
}