import { Router } from 'express'
import { controladorGetDonaciones, controladorPostDonaciones } from './controladores.js'
import { soloAdmins } from './middlewares.js'

const router = new Router()

router.get('/', controladorGetDonaciones)
router.post('/', soloAdmins, controladorPostDonaciones)

export default router
