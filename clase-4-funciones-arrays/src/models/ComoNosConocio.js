/**
 * enumera las posibles formas en que un socio se enteró del negocio
 */
export default class ComoNosConocio {
    #valor;

    static #valoresPosibles = ['redes', 'volantes'];
    static REDES = new ComoNosConocio('redes');
    static VOLANTES = new ComoNosConocio('volantes');

    /**
     * @param {string} valor
     */
    constructor(valor) {
        ComoNosConocio.asegurarFormaDeConocernosExistente(valor);
        this.#valor = valor;
    }

    static asegurarFormaDeConocernosExistente(forma) {
        if (!ComoNosConocio.#valoresPosibles.includes(forma)) {
            throw new Error('valor invalido para como nos conocio');
        }
    }

    get valor() { return this.#valor; }
}
