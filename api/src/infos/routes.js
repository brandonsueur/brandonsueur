import { Router } from 'express'

import infos from './actions/infos'

const router = Router()

router
    .route('/')
    .get(infos.read)

export default router