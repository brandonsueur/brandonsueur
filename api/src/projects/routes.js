import { Router } from 'express'

import projects from './actions/projects'

const router = Router()

router
    .route('/')
    .get(projects.read)

export default router