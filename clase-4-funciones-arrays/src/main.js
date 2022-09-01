import Dni from './models/Dni.js';
import EnteroPositivo from './models/EnteroPositivo.js';
import Cliente from './models/Cliente.js';
import Barrio from './models/Barrio.js';
import ComoNosConocio from './models/ComoNosConocio.js';

const dni = new Dni("36123123")
const edad = new EnteroPositivo(36)
const cliente = new Cliente(dni, edad, Barrio.VILLA_DEL_PARQUE, ComoNosConocio.REDES)

console.log(cliente)
console.log(cliente.edadEnAnios)

const datosCliente = cliente.datos()
console.log(datosCliente)
console.log(datosCliente.edadEnAnios)

