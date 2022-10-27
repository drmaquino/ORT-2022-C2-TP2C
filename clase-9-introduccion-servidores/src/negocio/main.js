import Sistema from './Sistema.js'
import historialDeDonaciones from './HistorialDeDonaciones/HistorialDeDonacionesFactory.js'
import notificador from './Notificador/NotificadorFactory.js'

const sistema = new Sistema(notificador, historialDeDonaciones)