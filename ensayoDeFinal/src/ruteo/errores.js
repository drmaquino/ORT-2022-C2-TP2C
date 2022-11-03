export function manejoDeErrores(error, req, res, next) {
    switch (error.tipo) {
        case 'ERROR_ARGUMENTO_INVALIDO':
        case 'EXCEDE_RESERVA_PARA_AUXILIO':
            res.status(400)
            break
        default:
            res.status(500)
    }
    res.json({ mensaje: error.message })
}