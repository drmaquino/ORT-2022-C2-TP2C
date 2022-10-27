import NotificadorConsola from './NotificadorConsola.js';
import { MODO } from '../config/config.js';

let notificador

if (MODO === 'produccion') {
    notificador = new NotificadorConsola() // aca iria el real!!
} else {
    notificador = new NotificadorConsola()
}

export default notificador