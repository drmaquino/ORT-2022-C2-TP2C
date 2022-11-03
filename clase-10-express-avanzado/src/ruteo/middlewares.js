import multer from 'multer'

export function clasificarUsuarios(req, res, next) {
    if (req.header('palabraSecreta') === 'ABC123') {
        req.isAdmin = true
    }
    next()
}

export function soloAdmins(req, res, next) {
    if (req.isAdmin) {
        next()
    } else {
        res.sendStatus(403)
    }
}

const upload = multer({ dest: './images' })
export const extraerImagen = upload.single('imagen')