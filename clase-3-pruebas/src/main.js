import Dni from './models/Dni.js';
import EnteroPositivo from './models/EnteroPositivo.js';
import Persona from './models/Persona.js';
import Barrio from './models/Barrio.js';
import ComoNosConocio from './models/ComoNosConocio.js';

const dni = new Dni("36123123")
const edad = new EnteroPositivo(36)
const p = new Persona(dni, edad, Barrio.VILLA_DEL_PARQUE, ComoNosConocio.REDES)
console.log(p)
console.log(p.edadEnAnios)

const datosPersona = p.datos()
console.log(datosPersona)
console.log(datosPersona.edadEnAnios)
