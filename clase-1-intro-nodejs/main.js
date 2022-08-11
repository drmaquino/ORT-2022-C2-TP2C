class MissingArgumentError extends Error {
    constructor(fieldName) {
        super("'" + fieldName + "' es un campo requerido")
    }
}

class Persona {
    #nombre
    #edad
    static #cantPersonas = 0

    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
        Persona.#cantPersonas++
    }

    get nombre() {
        return this.#nombre
    }

    set nombre(value) {
        if (value == null) {
            throw new MissingArgumentError("nombre")
        }
        this.#nombre = value
    }

    saludar() {
        const saludo = `hola! soy ${this.nombre}, ya somos ${Persona.#cantPersonas}`
        console.log(saludo);
    }
}

const saludo = "hola mundo"
console.log(saludo)

const p = new Persona("marian", 36)
p.nombre = "pepe"
// p.nombre = null
console.log(p.nombre)

const p2 = new Persona("german", 20)

p2.saludar()