import { Router } from 'express'

import links from './actions/links'

const router = Router()

router
    .route('/')
    .get(links.read)

export default router