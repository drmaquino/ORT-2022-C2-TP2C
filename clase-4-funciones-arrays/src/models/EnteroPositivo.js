export default class EnteroPositivo {
    #valor;

    /**
     * @param {number} valor
     */
    constructor(valor) {
        if (!Number.isInteger(valor)) {
            throw new Error('el valor debe ser entero');
        }
        if (valor < 0) {
            throw new Error(' el valor debe ser positivo');
        }
        this.#valor = valor;
    }

    get valor() { return this.#valor; }
}
