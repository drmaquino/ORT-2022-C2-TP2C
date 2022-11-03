import { Router } from 'express'
import { controladorGetReporteDiversidad, controladorPostTurnos } from './controladores.js'

const router = new Router()

router.post('/', controladorPostTurnos)
router.get('/', controladorGetReporteDiversidad)

export default router
