class Dni {
    #numero

    /**
     * @param {string} numero 
     */
    constructor(numero) {
        if (typeof numero != 'string') {
            throw new Error('el dni debe ser un string')
        }
        if (numero.length < 7 || numero.length > 8) {
            throw new Error('el dni debe tener 7 u 8 caracteres')
        }
        if (isNaN(numero)) {
            throw new Error('el dni debe ser numerico')
        }
        if (Number(numero) <= 0) {
            throw new Error('el dni debe ser positivo')
        }
        this.#numero = numero
    }

    get numero() { return this.#numero }
}

class ComoNosConocio {
    #valor

    static #valoresPosibles = ['redes', 'volantes']
    static REDES = new ComoNosConocio('redes')
    static VOLANTES = new ComoNosConocio('volantes')

    /**
     * @param {string} valor 
     */
    constructor(valor) {
        if (!ComoNosConocio.#valoresPosibles.includes(valor)) {
            throw new Error('valor invalido para como nos conocio')
        }
        this.#valor = valor
    }

    get valor() { return this.#valor }
}

class EnteroPositivo {
    #valor

    /**
     * @param {number} valor 
     */
    constructor(valor) {
        if (!Number.isInteger(valor)) {
            throw new Error('el valor debe ser entero')
        }
        if (valor < 0) {
            throw new Error(' el valor debe ser positivo')
        }
        this.#valor = valor
    }

    get valor() { return this.#valor }
}

class Barrio {
    #nombre

    static #valoresPosibles = ['villa del parque', 'flores', 'caballito', /* ... */]
    static VILLA_DEL_PARQUE = new Barrio('villa del parque')
    static FLORES = new Barrio('flores')
    static CABALLITO = new Barrio('caballito')
    /* agregar mas barrios... */

    /**
     * @param {string} nombre
     */
    constructor(nombre) {
        if (typeof nombre != 'string') {
            throw new Error('el nombre debe ser un string')
        }
        if (nombre.length == 0) {
            throw new Error('el nombre no puede ser vacio')
        }
        if (!Barrio.#valoresPosibles.includes(nombre)) {
            throw new Error('el nombre no pertenece a un barrio valido')
        }
        this.#nombre = nombre
    }

    get nombre() { return this.#nombre }
}

class Persona {
    #dni;
    #edadEnAnios
    #barrio
    #comoNosConocio

    /**
     * @param {Dni} dni
     * @param {EnteroPositivo} edadEnAnios
     * @param {Barrio} barrio
     * @param {ComoNosConocio} comoNosConocio
     */
    constructor(dni, edadEnAnios, barrio, comoNosConocio) {
        this.#dni = dni
        this.#edadEnAnios = edadEnAnios
        this.#barrio = barrio
        this.#comoNosConocio = comoNosConocio
    }

    get dni() { return this.#dni.numero }
    get edadEnAnios() { return this.#edadEnAnios.valor }
    get barrio() { return this.#barrio.nombre }
    get comoNosConocio() { return this.#comoNosConocio.valor }

    datos() {
        return Object.freeze({
            dni: this.#dni.numero,
            edadEnAnios: this.#edadEnAnios.valor,
            barrio: this.#barrio.nombre,
            comoNosConocio: this.#comoNosConocio.valor
        })
    }
}

const dni = new Dni("36123123")
const edad = new EnteroPositivo(33)
const p = new Persona(dni, edad, Barrio.VILLA_DEL_PARQUE, ComoNosConocio.REDES)
console.log(p)
console.log(p.edadEnAnios)

const datosPersona = p.datos()
console.log(datosPersona)
console.log(datosPersona.edadEnAnios)
