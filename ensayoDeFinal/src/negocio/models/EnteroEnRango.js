import ErrorArgumentoInvalido from './errors/ErrorArgumentoInvalido.js';

export default class EnteroEnRango {
    #valor;

    /**
     * @param {number} valor
     * @param {number} min
     * @param {number} max
     * @param {string} descripcion
     */
    constructor(valor, min, max, descripcion = 'el valor') {
        const num = parseInt(valor)
        if (isNaN(num)) {
            throw new ErrorArgumentoInvalido(`${descripcion} debe ser entero`);
        }
        if (num < min || num > max) {
            throw new ErrorArgumentoInvalido(`${descripcion} debe estar en rango [${min} - ${max}]`);
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}
