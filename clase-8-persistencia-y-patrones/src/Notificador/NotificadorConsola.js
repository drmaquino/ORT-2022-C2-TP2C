export default class NotificadorConsola {
    notificarALaAdministracion({ nombre, monto }) {
        console.log(`mail enviado al admin (nombre: ${nombre}, monto: ${monto})`)
    }
}