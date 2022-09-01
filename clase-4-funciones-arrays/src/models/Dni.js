class ErrorDeTipo extends Error {
    constructor(mensaje) {
        super(mensaje)
        this.tipo = 'ERROR_DE_TIPO'
    }
}

export default class Dni {
    #numero;

    /**
     * @param {string} numero
     */
    constructor(numero) {
        if (typeof numero != 'string') {
            throw new ErrorDeTipo('el dni debe ser un string')
        }
        if (numero.length < 7 || numero.length > 8) {
            throw new Error('el dni debe tener 7 u 8 caracteres');
        }
        if (isNaN(numero)) {
            throw new Error('el dni debe ser numerico');
        }
        if (Number(numero) <= 0) {
            throw new Error('el dni debe ser positivo');
        }
        this.#numero = numero;
    }

    get numero() { return this.#numero; }
}


