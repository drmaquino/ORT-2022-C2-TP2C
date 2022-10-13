const letras = 'abcdefghijklmnopqrstuvwxyz'

function esAlfabetico(str) {
    return str.split('').every(l => letras.includes(l.toLowerCase()))
}

export default class Palabra {
    #valor;

    /**
     * @param {string} valor
     */
    constructor(valor) {
        if (!valor) {
            throw new Error('el valor no puede ser nulo');
        }
        if (typeof valor !== 'string') {
            throw new Error('el valor debe ser un string');
        }
        if (valor.length === 0) {
            throw new Error('el string no puede estar vacio');
        }
        if (!esAlfabetico(valor)) {
            throw new Error('el string solo debe contener letras');
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}
