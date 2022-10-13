import HistorialDeDonacionesMemoria from './HistorialDeDonacionesMemoria.js'
import HistorialDeDonacionesMongoDb from './HistorialDeDonacionesMongoDb.js'
import { MODO } from '../config/config.js'

let historial

if (MODO === 'produccion') {
    historial = new HistorialDeDonacionesMongoDb()
} else {
    historial = new HistorialDeDonacionesMemoria()
}

export default historial