export function manejoDeErrores(error, req, res, next) {
    switch (error.tipo) {
        case 'ERROR_ARGUMENTO_INVALIDO':
            res.status(400)
        default:
            res.status(500)
    }
    res.json({ mensaje: error.message })
}