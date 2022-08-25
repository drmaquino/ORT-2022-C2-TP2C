export default class Persona {
    #dni;
    #edadEnAnios;
    #barrio;
    #comoNosConocio;

    /**
     * @param {Dni} dni
     * @param {EnteroPositivo} edadEnAnios
     * @param {Barrio} barrio
     * @param {ComoNosConocio} comoNosConocio
     */
    constructor(dni, edadEnAnios, barrio, comoNosConocio) {
        this.#dni = dni;
        this.#edadEnAnios = edadEnAnios;
        this.#barrio = barrio;
        this.#comoNosConocio = comoNosConocio;
    }

    get dni() { return this.#dni.numero; }
    get edadEnAnios() { return this.#edadEnAnios.valor; }
    get barrio() { return this.#barrio.nombre; }
    get comoNosConocio() { return this.#comoNosConocio.valor; }

    datos() {
        return Object.freeze({
            dni: this.#dni.numero,
            edadEnAnios: this.#edadEnAnios.valor,
            barrio: this.#barrio.nombre,
            comoNosConocio: this.#comoNosConocio.valor
        });
    }
}
