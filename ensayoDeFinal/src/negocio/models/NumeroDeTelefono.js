import ErrorArgumentoInvalido from './errors/ErrorArgumentoInvalido.js';

const numeros = '1234567890'
function esNumerico(str) {
    return str.split('').every(n => numeros.includes(n.toLowerCase()))
}

export default class NumeroDeTelefono {
    #valor;

    /**
     * @param {number} valor
     */
    constructor(valor) {
        if (typeof valor !== 'string') {
            throw new ErrorArgumentoInvalido('el numero de telefono debe ser una cadena de caracteres');
        }
        if (!esNumerico(valor)) {
            throw new ErrorArgumentoInvalido('el numero de telefono debe contener solo numeros');
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}
