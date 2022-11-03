import ErrorArgumentoInvalido from './errors/ErrorArgumentoInvalido.js';

const letras = 'abcdefghijklmnopqrstuvwxyz '
function esAlfabetico(str) {
    return str.split('').every(l => letras.includes(l.toLowerCase()))
}

export default class Nombre {
    #valor;

    /**
     * @param {string} valor
     */
    constructor(valor) {
        if (typeof valor !== 'string') {
            throw new ErrorArgumentoInvalido('el nombre debe ser una cadena de caracteres');
        }
        if (!esAlfabetico(valor)) {
            throw new ErrorArgumentoInvalido('el nombre debe contener solo letras y/o espacios');
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}
