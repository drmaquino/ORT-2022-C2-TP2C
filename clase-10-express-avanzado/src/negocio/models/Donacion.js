import EnteroPositivo from './EnteroPositivo.js';
import ErrorArgumentoInvalido from './errors/ErrorArgumentoInvalido.js';

const letras = 'abcdefghijklmnopqrstuvwxyz'
function esAlfabetico(str) {
    return str.split('').every(l => letras.includes(l.toLowerCase()))
}

const ANONIMO = 'anonimo'

export default class Donacion {
    #nombre;
    #monto;
    constructor({ nombre, monto }) {
        this.nombre = nombre;
        this.monto = monto;
    }

    set nombre(valor) {
        if (!valor) {
            this.#nombre = ANONIMO;
        } else if (esAlfabetico(valor)) {
            this.#nombre = valor
        } else {
            throw new ErrorArgumentoInvalido('el nombre debe contener únicamente letras')
        }
    }

    set monto(valor) {
        const montoPositivo = new EnteroPositivo(valor)
        this.#monto = montoPositivo.valor;
    }

    get nombre() { return this.#nombre; }
    get monto() { return this.#monto; }

    superaMonto(monto) {
        return this.#monto > monto
    }

    esAnonima() {
        return this.#nombre === ANONIMO
    }

    asDto() {
        return Object.freeze({
            nombre: this.#nombre,
            monto: this.#monto
        })
    }
}
