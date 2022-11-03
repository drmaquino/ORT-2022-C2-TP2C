import EnteroEnRango from './EnteroEnRango.js';
import Nombre from './Nombre.js';
import NumeroDeTelefono from './NumeroDeTelefono.js';
import TipoDeServicio from './TipoDeServicio.js';

export default class Turno {
    #dia;
    #mes;
    #hora;
    #nombreResponsable;
    #telefono;
    #tipoDeServicio;

    constructor({
        dia,
        mes,
        hora,
        nombreResponsable,
        telefono,
        tipoDeServicio, }) {
        this.dia = dia
        this.mes = mes
        this.hora = hora
        this.nombreResponsable = nombreResponsable
        this.telefono = telefono
        this.tipoDeServicio = tipoDeServicio
    }

    get dia() { return this.#dia }
    get mes() { return this.#mes }
    get hora() { return this.#hora }
    get nombreResponsable() { return this.#nombreResponsable }
    get telefono() { return this.#telefono }
    get tipoDeServicio() { return this.#tipoDeServicio }

    set dia(valor) {
        this.#dia = new EnteroEnRango(valor, 1, 31, 'dia')
    }

    set mes(valor) {
        this.#mes = new EnteroEnRango(valor, 1, 12, 'mes')
    }

    set hora(valor) {
        this.#hora = new EnteroEnRango(valor, 0, 23, 'hora')
    }

    set nombreResponsable(valor) {
        this.#nombreResponsable = new Nombre(valor)
    }

    set telefono(valor) {
        this.#telefono = new NumeroDeTelefono(valor)
    }

    set tipoDeServicio(valor) {
        this.#tipoDeServicio = new TipoDeServicio(valor)
    }

    asDto() {
        return Object.freeze({
            dia: this.#dia.valor,
            mes: this.#mes.valor,
            hora: this.#hora.valor,
            nombreResponsable: this.#nombreResponsable.valor,
            telefono: this.#telefono.valor,
            tipoDeServicio: this.#tipoDeServicio.valor,
        })
    }
}
