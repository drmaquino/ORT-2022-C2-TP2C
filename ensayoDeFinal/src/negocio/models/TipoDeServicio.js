/**
 * enumera los posibles tipos de servicio mecanicos
 */
export default class TipoDeServicio {
    #valor;

    static #valoresPosibles = ['programado', 'auxilio', 'cotizacion'];
    static PROGRAMADO = new TipoDeServicio('programado');
    static AUXILIO = new TipoDeServicio('auxilio');
    static COTIZACION = new TipoDeServicio('cotizacion');

    /**
     * @param {string} valor
     */
    constructor(valor) {
        TipoDeServicio.asegurarTipoDeServicioExistente(valor);
        this.#valor = valor;
    }

    static asegurarTipoDeServicioExistente(tipo) {
        if (!TipoDeServicio.#valoresPosibles.includes(tipo)) {
            throw new Error('valor invalido para tipo de servicio');
        }
    }

    get valor() { return this.#valor; }
}