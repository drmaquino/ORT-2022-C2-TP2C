export default class Barrio {
    #nombre;

    static #valoresPosibles = ['villa del parque', 'flores', 'caballito', /* ... */];
    static VILLA_DEL_PARQUE = new Barrio('villa del parque');
    static FLORES = new Barrio('flores');
    static CABALLITO = new Barrio('caballito');
    /* agregar mas barrios... */
    /**
     * @param {string} nombre
     */
    constructor(nombre) {
        if (typeof nombre != 'string') {
            throw new Error('el nombre debe ser un string');
        }
        if (nombre.length == 0) {
            throw new Error('el nombre no puede ser vacio');
        }
        if (!Barrio.#valoresPosibles.includes(nombre)) {
            throw new Error('el nombre no pertenece a un barrio valido');
        }
        this.#nombre = nombre;
    }

    get nombre() { return this.#nombre; }
}
